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
}
function game() {
  window.location.href = "gamedev.html";
}
function multimedia() {
  window.location.href = "multimedia.html";
}
function training() {
  window.location.href = "training.html";
}
// funsgi divisi end

// fungsi carousel horizontal

const container = document.querySelector(".horizontal-scroll");
const items = document.querySelectorAll(".item");
const container2 = document.querySelector(".horizontal-scroll2");
const items2 = document.querySelectorAll(".item2");

let currentIndex1 = 0;
let currentIndex2 = 0;

let isDragging1 = false;
let isDragging2 = false;

let startX1, scrollLeft1;
let startX2, scrollLeft2;

// Auto-scroll for container 1
function autoScroll() {
  if (!isDragging1) {
    currentIndex1++;
    if (currentIndex1 >= items.length) {
      currentIndex1 = 0;
    }
    scrollToIndex1(currentIndex);
  }
}

function scrollToIndex1(index) {
  const itemWidth = items[index].clientWidth;
  const scrollPosition =
    items[index].offsetLeft - (container.clientWidth / 2 - itemWidth / 2);
  container.scroll({
    left: scrollPosition,
    behavior: "smooth",
  });
}

function checkIfEnd1() {
  const lastItem = items[items.length - 1];
  if (
    container.scrollLeft >=
    lastItem.offsetLeft - container.clientWidth + lastItem.clientWidth
  ) {
    container.scroll({
      left: 0,
      behavior: "smooth",
    });
    currentIndex1 = 0;
  }
}

container.addEventListener("mousedown", (e) => {
  isDragging1 = true;
  startX1 = e.pageX - container.offsetLeft;
  scrollLeft1 = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDragging1 = false;
  checkIfEnd1();
});

container.addEventListener("mouseup", () => {
  isDragging1 = false;
  checkIfEnd1();
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging1) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX1) * 2;
  container.scrollLeft = scrollLeft1 - walk;
});

setInterval(autoScroll, 3000);

// Auto-scroll for container 2
function autoScroll2() {
  if (!isDragging2) {
    currentIndex2++;
    if (currentIndex2 >= items2.length) {
      currentIndex2 = 0;
    }
    scrollToIndex2(currentIndex2);
  }
}

function scrollToIndex2(index) {
  const itemWidth = items2[index].clientWidth;
  const scrollPosition =
    items2[index].offsetLeft - (container2.clientWidth / 2 - itemWidth / 2);
  container2.scroll({
    left: scrollPosition,
    behavior: "smooth",
  });
}

function checkIfEnd2() {
  const lastItem = items2[items2.length - 1];
  if (
    container2.scrollLeft >=
    lastItem.offsetLeft - container2.clientWidth + lastItem.clientWidth
  ) {
    container2.scroll({
      left: 0,
      behavior: "smooth",
    });
    currentIndex2 = 0;
  }
}

container2.addEventListener("mousedown", (e) => {
  isDragging2 = true;
  startX2 = e.pageX - container2.offsetLeft;
  scrollLeft2 = container2.scrollLeft;
});

container2.addEventListener("mouseleave", () => {
  isDragging2 = false;
  checkIfEnd2();
});

container2.addEventListener("mouseup", () => {
  isDragging2 = false;
  checkIfEnd2();
});

container2.addEventListener("mousemove", (e) => {
  if (!isDragging2) return;
  e.preventDefault();
  const x = e.pageX - container2.offsetLeft;
  const walk = (x - startX2) * 2;
  container2.scrollLeft = scrollLeft2 - walk;
});

setInterval(autoScroll2, 4000);

// fungsi carousel horizontal end

// fungsi summary

$(document).ready(function () {
  // Pastikan konten yang memiliki kelas 'show' tetap terbuka saat inisialisasi
  $(".accordion-content.show").slideDown();

  $(".accordion-header").click(function () {
    // Jika header yang diklik sudah aktif, tutup kontennya
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next(".accordion-content").slideUp();
    } else {
      // Tutup semua accordion content yang lain
      $(".accordion-content").not($(this).next()).slideUp();
      $(".accordion-header").not($(this)).removeClass("active");

      // Buka content yang diklik
      $(this).addClass("active");
      $(this).next(".accordion-content").slideDown();
    }
  });
});

// fungsi summary end

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
