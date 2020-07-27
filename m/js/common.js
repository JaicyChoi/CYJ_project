let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);

const main_menu = document.querySelector('#main_menu');
const main_menu_list = document.querySelector('.main_menu_list');
const main_menu_list_title = document.querySelectorAll('.main_menu_list li');
let menu_swiper;

menu_resize();

function menu_resize(){
    if( screen.width <= 480 ){
        main_menu.classList.add('swiper-container');
        main_menu_list.classList.remove('main_menu_list');
        main_menu_list.classList.add('mobile_menu');
        main_menu_list.classList.add('swiper-wrapper');
        main_menu_list_title.forEach(function(main_menu_list_title){
            main_menu_list_title.classList.add('swiper-slide');
            main_menu_list_title.style.width = 'auto';
        });

        main_menu_list_title[0].style.margin = '0 0 0 10px';

        menu_swiper = new Swiper('#main_menu', {
            slidesPerView: 'auto',
            spaceBetween: 25,
            GrabCursor: true
        });
    }
    else{
        main_menu_list.classList.add('main_menu_list');
        main_menu.classList.remove('swiper-container');
        main_menu_list.classList.remove('mobile_menu');
        main_menu_list.classList.remove('swiper-wrapper');
        main_menu_list_title.forEach(function(main_menu_list_title){
            main_menu_list_title.classList.remove('swiper-slide');
            main_menu_list_title.style.cssText = '';
        });
    }
}

window.addEventListener('resize', menu_resize);

//submenu popup event
const sub_menu_bg = document.querySelector('#sub_menu_bg');
const Submenu_List = DATA.Submenu_List;

main_menu_list_title.forEach(title => title.addEventListener('click', function(){
    if(  document.querySelector('header').lastChild.className === 'submenu_list' ){
        console.log( document.querySelector('header').lastChild.className);
        document.querySelector('header').removeChild(document.querySelector('header').lastChild);
    }

    sub_menu_bg.style.display = 'block';
    document.querySelector('#blur_box').style.filter = 'blur(5px)';
    document.querySelector('body').style.overflow = 'hidden';

    let ul = document.createElement('ul');
    ul.classList.add('submenu_list');

    for( item in Submenu_List[getNodeindex(title)] ){
        let li = document.createElement('li');

        li.innerHTML = Submenu_List[getNodeindex(title)][item];
        ul.appendChild(li);
    }
    document.querySelector('header').appendChild(ul);

    sub_menu_bg.addEventListener('click', function(){
        document.querySelector('header').removeChild(ul);
        sub_menu_bg.style.display = ''
        document.querySelector('#blur_box').style.filter = '';
        document.querySelector('body').style.overflow = '';
    });
}));