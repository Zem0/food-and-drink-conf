import React from 'react';
import headingStyles from './index.module.sass';

export default function SmallSectionHeading({children, heading}) {
    return (
        <h2 className={`${'span-whole-grid'} ${headingStyles['small-section-heading']}`}>{heading}</h2>
    )
}