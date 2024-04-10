import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const HeroImage = () => {
    const heroImageRef = useRef(null);
    const parentRef = useRef(null); // Ref for the parent element to be used as the scroll trigger

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(heroImageRef.current, {
            scaleX: 0.3,
            scaleY: 0.3,
            transformOrigin: 'top right',
            duration: 1,
            scrollTrigger: {
                trigger: parentRef.current, // Set the trigger to the parent element
                pin: true,
                start: 'top 30%', // Trigger animation when parent element comes into view
                end: '+=746',
                scrub: true,
                // markers: true // Remove this line in production
            }
        });
    }, []);

    return (
        <div className='hero-image-container span-whole-grid' ref={parentRef}>
            <Image
                ref={heroImageRef}
                src='/images/header-image.png'
                alt='Hero Image'
                className='hero-image'
                width={1324}
                height={746}
            />
        </div>
    );
};

export default HeroImage;