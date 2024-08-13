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

// Change slide automatically every 3 seconds
setInterval(showNextSlide, 5000);

// fungsi carousel end

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
