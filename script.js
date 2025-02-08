let counter = 0; // Start from first slide
const slides = document.querySelector('.slides');
const totalSlides = 4; // Number of slides

setInterval(() => {
    counter++; // Move to the next slide
    if (counter >= totalSlides) {
        counter = 0; // Reset when exceeding total slides
    }

    slides.style.marginLeft = `-${counter * 100}%`; // Move slider

}, 5000);

// Displaying links on mobile devices 
const navLinks = document.querySelector('.nav_links');
const displayLinks =  document.querySelector('.hambuger_icon');
displayLinks.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});