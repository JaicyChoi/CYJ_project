const main_visual = document.querySelector('#main_visual');
const main_visual_list = document.querySelector('#main_visual_list');
const visual_button = document.querySelector('#visual_button');
const next_btn = document.getElementById('next_btn');
const prev_btn = document.getElementById('prev_btn');
const main_visual_img = DATA.Main_Visual;
const interval = 2000;

for( let i = 0 ; i <= main_visual_img.length - 1; i++ ){
    let main_visual_li = document.createElement('li');
    let main_visual_li_img = document.createElement('img');

    main_visual_li.classList.add('slide');
    main_visual_li_img.src = 'images/main_visual' + ( i + 1 ) + '.png';
    main_visual_li_img.alt = main_visual_img[i];
    main_visual_li_img.setAttribute('tabindex', '0');
    main_visual_li.appendChild(main_visual_li_img);
    main_visual_list.appendChild(main_visual_li);
}

let slides = document.querySelectorAll('.slide'); //5 slides
let index = 1;
let slide_id;

const first_clone = slides[0].cloneNode(true);
const last_clone = slides[slides.length - 1].cloneNode(true);

first_clone.id = 'first_clone';
last_clone.id = 'last_clone';

main_visual_list.appendChild(first_clone);
main_visual_list.insertBefore(last_clone, slides[0]);
main_visual_list.style.transform = 'translateX(' + -100 * index + '%)';

function start_slide(){
  slide_id = setInterval(move_next, interval);
  visual_button.style.cssText = 'opacity:0; transition: .5s ease-out;';
}

main_visual_list.addEventListener('transitionend', function(){
  slides = document.querySelectorAll('.slide');
  if (slides[index].id === first_clone.id) {
    main_visual_list.style.transition = 'none';
    index = 1;
    main_visual_list.style.transform = 'translateX(' + -100 * index + '%)';
  }

  if (slides[index].id === last_clone.id) {
    main_visual_list.style.transition = 'none';
    index = slides.length - 2;
    main_visual_list.style.transform = 'translateX(' + -100 * index + '%)';
  }
});

function move_next(){
  slides = document.querySelectorAll('.slide');
  if (index >= slides.length - 1) return;
  index++;
  main_visual_list.style.transition = '.7s ease-out';
  main_visual_list.style.transform = 'translateX(' + -100 * index + '%)';
};

function move_prev(){
  if (index <= 0) return;
  index--;
  main_visual_list.style.transition = '.7s ease-out';
  main_visual_list.style.transform = 'translateX(' + -100 * index + '%)';
};

main_visual.addEventListener('mouseenter', function(){
  clearInterval(slide_id);
  visual_button.style.cssText = 'opacity:1; transition: .5s ease-in;'
});
main_visual.addEventListener('focusin', function(){
  clearInterval(slide_id);
  visual_button.style.cssText = 'opacity:1; transition: .5s ease-in;'
});

main_visual.addEventListener('mouseleave', start_slide);
main_visual.addEventListener('focusout', start_slide);
next_btn.addEventListener('click', move_next);
prev_btn.addEventListener('click', move_prev);

start_slide();