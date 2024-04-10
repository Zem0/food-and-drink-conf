import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import LargeH3 from '@/components/atoms/large-h3';
import listItemStyles from './index.module.sass';

import { useMousePosition } from '@/scripts/use-mouse-position';

/**
 * LargeListItem component renders a list item using an <li> tag, with different versions based on screen width.
 * It displays a desktop version by default and a mobile version for screens narrower than 768px.
 *
 * @param {Object} props - Component props.
 * @param {string} props.headingText - Heading text to be displayed.
 * @param {string} props.detailText - Detail text to be displayed.
 * @param {string} props.additionalClassNames - Additional CSS classes to apply to the list item.
 * @param {string} props.imageSrc - Source URL for the image.
 * @returns {JSX.Element} React component.
 */
export default function LargeListItem({ headingText, detailText, additionalClassNames, imageSrc }) {
    const { x, y } = useMousePosition(); // Get the current cursor position
    const [showImage, setShowImage] = useState(false);

    /**
     * Handler function to set showImage state to true when mouse enters the list item.
     * @returns {void}
     */
    const handleMouseEnter = () => {
        setShowImage(true);
    };

    /**
     * Handler function to set showImage state to false when mouse leaves the list item.
     * @returns {void}
     */
    const handleMouseLeave = () => {
        setShowImage(false);
    };

    // track the window width to allow us to show a different version of the component at narrower screen widths
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Access window width if available
            setWindowWidth(window.innerWidth);

            // Function to handle window resize
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            // Add event listener for window resize
            window.addEventListener('resize', handleResize);

            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <>
            {windowWidth < 768 ? ( // For screens narrower than 768px
                <MobileVersion
                    headingText={headingText}
                    detailText={detailText}
                    additionalClassNames={additionalClassNames}
                    imageSrc={imageSrc}
                />
            ) : (
                <DesktopVersion
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    x={x}
                    y={y}
                    showImage={showImage}
                    headingText={headingText}
                    detailText={detailText}
                    additionalClassNames={additionalClassNames}
                    imageSrc={imageSrc}
                />
            )}
        </>
    );
}

/**
 * Desktop component to be shown as default.
 * @param {Object} props - Component props.
 * @param {string} props.headingText - Heading text to be displayed.
 * @param {string} props.detailText - Detail text to be displayed.
 * @param {string} props.additionalClassNames - Additional CSS classes to apply to the list item.
 * @param {Function} props.handleMouseEnter - Handler function for mouse enter event.
 * @param {Function} props.handleMouseLeave - Handler function for mouse leave event.
 * @param {number} props.x - Current x-coordinate of the mouse cursor.
 * @param {number} props.y - Current y-coordinate of the mouse cursor.
 * @param {boolean} props.showImage - Flag to indicate whether to show the image.
 * @param {string} props.imageSrc - Source URL for the image.
 * @returns {JSX.Element} React component.
 */
const DesktopVersion = ({ headingText, detailText, additionalClassNames, handleMouseEnter, handleMouseLeave, x, y, showImage, imageSrc }) => {
    return (
        <li
            className={`${'fade-in'} ${listItemStyles['large-list-item']} ${additionalClassNames}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <LargeH3 headingText={headingText}></LargeH3>
            <span className={`${listItemStyles['detail-text']}`}>{detailText}</span>

            {showImage && (
                <Image
                    className={`${'cursor-image'}`}
                    src={imageSrc}
                    alt='Image'
                    width={340}
                    height={191}
                    style={{
                        top: y + 'px',
                        left: x + 'px'
                    }}
                />
            )}
        </li>
    );
}

/**
 * Mobile component to be displayed at mobile sizes.
 * @param {Object} props - Component props.
 * @param {string} props.headingText - Heading text to be displayed.
 * @param {string} props.detailText - Detail text to be displayed.
 * @param {string} props.additionalClassNames - Additional CSS classes to apply to the list item.
 * @param {string} props.imageSrc - Source URL for the image.
 * @returns {JSX.Element} React component.
 */
const MobileVersion = ({ headingText, detailText, additionalClassNames, imageSrc }) => {
    return (
        <li className={`${'fade-in mobile-view'} ${listItemStyles['large-list-item']} ${additionalClassNames} ${listItemStyles['mobile-view']}`}>
            <Image
                src={imageSrc}
                alt='Image'
                width={350}
                height={197}
            />
            <LargeH3 headingText={headingText}></LargeH3>
            <span className={`${listItemStyles['detail-text']}`}>{detailText}</span>
        </li>
    );
}