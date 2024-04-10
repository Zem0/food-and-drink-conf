import React from 'react';
import listStyles from './index.module.sass';

export default function List({children, heading}) {
    return (
        <>
            { heading &&
                <h2 className={`${'list-heading span-whole-grid'} ${listStyles.heading}`}>{heading}</h2>
            }
            <ul className={`${'span-whole-grid'} ${listStyles.list}`}>
                {children}
            </ul>
        </>
    );
};