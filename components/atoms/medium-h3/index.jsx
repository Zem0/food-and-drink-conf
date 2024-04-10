import React from 'react';
import headingStyles from './index.module.sass';
/**
 * MediumH3 component represents a medium-sized heading element (<h3>).
 * It renders the provided heading text with a specific style.
 *
 * @param {object} props - Props for MediumH3 component.
 * @param {string} props.headingText - The text to be displayed as the heading.
 * @returns {JSX.Element} MediumH3 component.
 */
export default function MediumH3({ headingText }) {
    return (
        <h3 className={`${headingStyles['medium-h3']}`}>{headingText}</h3>
    );
}