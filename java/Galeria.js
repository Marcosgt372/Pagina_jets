var slides = document.querySelectorAll(".carousel-slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);
var nextButton = document.querySelector(".carousel-button-right");
var prevButton = document.querySelector(".carousel-button-left");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

nextButton.addEventListener("click", function () {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
});

prevButton.addEventListener("click", function () {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
});