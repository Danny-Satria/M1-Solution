// fungsi navbar responsif

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const dropdowns = document.querySelectorAll(".dropdown");
  const nestedDropdowns = document.querySelectorAll(".nested-dropdown");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Mobile dropdown toggle
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("dropdown-active");
      }
    });
  });

  // Mobile nested dropdown toggle
  nestedDropdowns.forEach((nestedDropdown) => {
    nestedDropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        nestedDropdown.classList.toggle("nested-dropdown-active");
      }
    });
  });
};

navSlide();

// fungsi navbar responsif end

// fungsi carousel

const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function showSlide(index) {
  const offset = index * -100;
  slides.style.transform = `translateX(${offset}%)`;
  updateIndicators(index);
}

function showNextSlide() {
  currentIndex++;
  if (currentIndex === slideCount) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount - 1;
  }
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Change slide automatically every 5 seconds
setInterval(showNextSlide, 5000);

// fungsi carousel end

// fungsi divisi
function software() {
  window.location.href = "softwaredev.html";
  window.location.href = "Pages/divisi_page/softwaredev.html";
}
function game() {
  window.location.href = "Pages/divisi_page/gamedev.html";
  window.location.href = "gamedev.html";
}
function multimedia() {
  window.location.href = "Pages/divisi_page/multimedia.html";
  window.location.href = "multimedia.html";
}
function training() {
  window.location.href = "Pages/divisi_page/training.html";
  window.location.href = "training.html";
}

// footer

document.querySelectorAll(".footer-social ul li a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.2)";
    link.style.transition = "transform 0.3s ease";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});

// footer end
