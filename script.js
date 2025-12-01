// Smooth scroll for nav
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mobile nav toggle
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const hamburger = document.querySelector(".hamburger");
  mobileNav.classList.toggle("show");
  hamburger.classList.toggle("open");
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Auto year (footer)
document.querySelectorAll(".footer p").forEach(p => {
  p.innerHTML = `© ${new Date().getFullYear()} AMSA — Alusani Math & Science Academy`;
});

// Smooth scroll for nav links
document.querySelectorAll(".nav-link[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('show');
}

// Scroll effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Animate elements on scroll
const faders = document.querySelectorAll('.fade-up, .subject-card, .program-card, .hero-left, .hero-right img');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

