import React from 'react';
import headingStyles from './index.module.sass';

/**
 * LargeH3 component represents a large heading element (<h3>).
 * It renders the provided heading text with a specific style.
 *
 * @param {object} props - Props for LargeH3 component.
 * @param {string} props.headingText - The text to be displayed as the heading.
 * @returns {JSX.Element} LargeH3 component.
 */
export default function LargeH3({ headingText }) {
    return (
        <h3 className={`${headingStyles['large-h3']}`}>{headingText}</h3>
    );
}