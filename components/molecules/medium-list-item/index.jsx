import React from 'react';
import MediumH3 from '@/components/atoms/medium-h3';
import listItemStyles from './index.module.sass';

export default function MediumListItem({headingText, additionalClassNames, onMouseEnter, onMouseLeave}) {
    return (
        <li className={`${'fade-in'} ${listItemStyles['medium-list-item']} ${additionalClassNames}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <MediumH3 headingText={headingText}></MediumH3>
        </li>
    );
}