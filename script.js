let counter = 0; // Start from first slide
const slides = document.querySelector(".slides");
const totalSlides = 4;
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const updateSlider = () => {
  slides.style.marginLeft = `-${counter * 100}%`;
};

const nextSlide = () => {
  counter++;
  if (counter >= totalSlides) {
    counter = 0; // Reset to first slide
  }
  updateSlider();
};

const prevSlide = () => {
  counter--;
  if (counter < 0) {
    counter = totalSlides - 1; // Move to last slide
  }
  updateSlider();
};

// Auto-slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

arrowRight.addEventListener("click", () => {
  clearInterval(slideInterval); // Stop auto-slide
  nextSlide();
  slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
});

arrowLeft.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

// Displaying links on mobile devices
const navLinks = document.querySelector(".nav_links");
const displayLinks = document.querySelector(".hambuger_icon");
displayLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});
