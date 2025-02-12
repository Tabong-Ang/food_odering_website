
// Displaying links on mobile devices
const navLinks = document.querySelectorAll(".nav_links");
const displayLinks = document.querySelector(".hambuger_icon");
displayLinks.addEventListener("click", () => {
  navLinks.forEach(link => {
    link.classList.toggle("active");
    if (link.classList.contains("active")) {
      link.style.display = "flex";
    } else {
      link.style.display = "none";
    }
  });
  
  
});

