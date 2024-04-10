import React from 'react';
import listStyles from './index.module.sass';

/**
 * List component renders an empty unordered list (<ul>) with optional heading. Children should be rendered inside the component for the list items.
 *
 * @param {object} props - Props for List component.
 * @param {string} [props.heading] - Optional heading text for the list.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the list.
 * @returns {JSX.Element} List component.
 */
export default function ListHolder({ children, heading }) {
    return (
        <>
            {heading && (
                <h2 className={`${'list-heading span-whole-grid'} ${listStyles.heading}`}>{heading}</h2>
            )}
            <ul className={`${'span-whole-grid'} ${listStyles.list}`}>
                {children}
            </ul>
        </>
    );
}