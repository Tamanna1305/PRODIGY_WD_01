const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

// Navbar color change on scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  document.querySelectorAll("[data-animate]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Typing effect
const typing = document.getElementById("typing");
const words = ["Modern Websites.", "Responsive Layouts.", "Smooth Interfaces.", "Creative Portfolios."];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < words.length) {
    current = words[i];
    typing.innerHTML = isDeleting ? current.substring(0, j--) : current.substring(0, j++);

    if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}
type();
