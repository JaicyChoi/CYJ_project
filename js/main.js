const slideContainer = document.querySelector('#main_visual');
const slide = document.querySelector('#main_visual_list');
const visual_button = document.querySelector('#visual_button');
const nextBtn = document.getElementById('next_btn');
const prevBtn = document.getElementById('prev_btn');
const interval = 2000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-100 * index}%)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
  visual_button.style.cssText = 'opacity:0; transition: .5s ease-out;'
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-100 * index}%)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-100 * index}%)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-100 * index}%`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-100 * index}%)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
  visual_button.style.cssText = 'opacity:1; transition: .5s ease-in;'
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();
