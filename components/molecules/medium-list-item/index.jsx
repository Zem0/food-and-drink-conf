import React from 'react';
import MediumH3 from '@/components/atoms/medium-h3';
import listItemStyles from './index.module.sass';

/**
 * MediumListItem component represents a medium-sized list item element (<li>).
 * It contains a medium-sized heading (<h3>) element.
 *
 * @param {object} props - Props for MediumListItem component.
 * @param {string} props.headingText - The text to be displayed as the heading.
 * @param {string} [props.additionalClassNames] - Additional CSS classes to be applied to the list item.
 * @param {function} [props.onMouseEnter] - Function to be called when the mouse enters the list item.
 * @param {function} [props.onMouseLeave] - Function to be called when the mouse leaves the list item.
 * @returns {JSX.Element} MediumListItem component.
 */
export default function MediumListItem({ headingText, additionalClassNames, onMouseEnter, onMouseLeave }) {
    return (
        <li className={`${'fade-in'} ${listItemStyles['medium-list-item']} ${additionalClassNames}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <MediumH3 headingText={headingText}></MediumH3>
        </li>
    );
}