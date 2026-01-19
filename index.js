feather.replace();
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const slides = document.getElementById("carousel-slides");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

const items = slides.children;
let index = 0;

function getItemsPerView() {
  const width = window.innerWidth;
  if (width >= 1024) return 3; // desktop
  if (width >= 640) return 2; // tablet
  return 1; // mobile
}

function updateCarousel() {
  const perView = getItemsPerView();
  const slideWidth = items[0].offsetWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

document.getElementById("next").addEventListener("click", () => {
  const perView = getItemsPerView();
  if (index < items.length - perView) index++;
  slides.style.transform = `translateX(-${index * items[0].offsetWidth}px)`;
});

document.getElementById("prev").addEventListener("click", () => {
  if (index > 0) index--;
  slides.style.transform = `translateX(-${index * items[0].offsetWidth}px)`;
});

window.addEventListener("resize", updateCarousel);
window.addEventListener("load", updateCarousel);
