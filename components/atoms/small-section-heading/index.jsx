import React from 'react';
import headingStyles from './index.module.sass';

/**
 * SmallSectionHeading component represents a small-sized section heading element (<h2>).
 * It renders the provided heading text with a specific style.
 *
 * @param {object} props - Props for SmallSectionHeading component.
 * @param {string} props.heading - The text to be displayed as the heading.
 * @returns {JSX.Element} SmallSectionHeading component.
 */
export default function SmallSectionHeading({ heading }) {
    return (
        <h2 className={`${'span-whole-grid'} ${headingStyles['small-section-heading']}`}>{heading}</h2>
    );
}