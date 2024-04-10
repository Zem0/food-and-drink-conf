/**
 * Applies a fade-in effect to elements with the 'fade-in' class.
 * This function works alongside style rules defined in styles/globals.sass.
 * @param {Window} window - The global window object.
 */
const fadeIn = (window) => {
    // Select all elements with the class 'fade-in'
    const elementsArray = window.document.querySelectorAll('.fade-in');
    for (let i = 0; i < elementsArray.length; i++) {
        const elem = elementsArray[i];
        // Calculate the distance of the element from the viewport top
        const distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        // If the element is in the viewport, add the 'inView' class; otherwise, remove it
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
};

// Function to handle scroll events and trigger the fadeIn function
const handleScroll = (window) => {
    // Call the fadeIn function with the current window object
    fadeIn(window);
};

export { fadeIn, handleScroll };