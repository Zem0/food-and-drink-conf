import React from 'react';
import headingStyles from './index.module.sass';

export default function MediumH3({headingText}) {
    return (
        <h3 className={`${headingStyles['medium-h3']}`}>{headingText}</h3>
    )
}