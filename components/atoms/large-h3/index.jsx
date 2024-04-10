import React from 'react';
import headingStyles from './index.module.sass';

export default function LargeH3({headingText}) {
    return (
        <h3 className={`${headingStyles['large-h3']}`}>{headingText}</h3>
    )
}