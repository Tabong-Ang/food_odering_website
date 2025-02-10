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

document.addEventListener("DOMContentLoaded", () => {

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Description section 
  ScrollReveal().reveal(".description h1", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".description p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".description button", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".sample_meals .sample_1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".sample_meals .sample_1 button", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".book_a_table h2", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".book_a_table p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".book_a_table button", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".table_types img", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".food_gallery h3", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".food_gallery p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".food_gallery food img", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".food_gallery button", {
    ...scrollRevealOption,
    delay: 1200,
  });

  ScrollReveal().reveal(".location h4", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".location p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".location .pics_iframe_box .pics_box", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".location .pics_iframe_box iframe", {
    ...scrollRevealOption,
    delay: 1200,
  });

  ScrollReveal().reveal(".contact_hours_of_operation .hours_of_operation h5", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".contact_hours_of_operation .hours_of_operation p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".contact_hours_of_operation contact_form", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".contact_hours_of_operation contact_form button", {
    ...scrollRevealOption,
    delay: 1200,
  });

  ScrollReveal().reveal("footer .bg-colo h6", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal("footer .bg-colo p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal("footer .bg-colo address", {
    ...scrollRevealOption,
    delay: 1200,
  });

  ScrollReveal().reveal("footer .bg-colo label", {
    ...scrollRevealOption,
    delay: 1500,
  });

});
