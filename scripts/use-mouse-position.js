import React from 'react';

/**
 * Custom hook to track mouse position.
 * @returns {Object} Object containing current mouse position { x, y }.
 */
export function useMousePosition() {
    // State to store mouse position
    const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });

    // Effect to update mouse position on mousemove event
    React.useEffect(() => {
        // Function to update mouse position
        const updateMousePosition = (ev) => {
            // Update mouse position based on clientX and clientY coordinates of mouse event
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        // Event listener to track mouse movement
        window.addEventListener('mousemove', updateMousePosition);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []); // Empty dependency array ensures effect runs only once after initial render

    // Return current mouse position
    return mousePosition;
}

export default useMousePosition;