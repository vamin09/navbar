'use strict';

const slideshowContainer = document.querySelector(".slideshow-container");
const images = [
  "url('assets/Images/492167.png')", 
  "url('assets/Images/492201.jpg')",
  "url('assets/Images/1973076.jpg')",
  "url('assets/Images/1973078.png')"
];

let currentSlide = 0;

const updateBackground = () => {
  slideshowContainer.style.backgroundImage = images[currentSlide];
};

const slideNext = () => {
  currentSlide = (currentSlide + 1) % images.length; 
  updateBackground();
};

const autoSlide = () => {
  setInterval(slideNext, 2000);
};

window.addEventListener("load", autoSlide);