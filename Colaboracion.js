const slider = document.querySelector('.slider');
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
const slideCount = slides.length;
const trackWidth = slideWidth * slideCount;

slideTrack.style.width = `${trackWidth}px`;

function slideLoop() {
    slideTrack.style.transform = `translateX(-${slideWidth}px)`;
    slideTrack.appendChild(slides[0]);
}

setInterval(slideLoop, 40000); // ajusta el tiempo según lo desees