// Function to apply fade-in effect to elements; this works alongside some style rules which can be found in styles/globals.sass.
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

const handleScroll = (window) => {
    fadeIn(window);
};

export { fadeIn, handleScroll };