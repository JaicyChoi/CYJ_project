const main_menu = document.querySelector('#main_menu');
const main_menu_list = document.querySelector('#main_menu_list');
const main_menu_title = document.querySelectorAll('.main_menu_title');
const submenu_list = document.querySelectorAll('.submenu_list');
const main_menu_bg = document.querySelector('#main_menu_bg');

main_menu_title.forEach(main_menu_title => 
    main_menu_title.addEventListener('mouseenter', show_menu));
main_menu_list.addEventListener('mouseenter', show_menu);
main_menu_list.addEventListener('mouseleave', hide_menu);
main_menu_bg.addEventListener('mouseleave', hide_menu);

function show_menu(){
    main_menu_bg.style.cssText = 'top: 0px; opacity:1; transition: .3s ease-in; display:block;';
    submenu_list.forEach(submenu_list => 
        submenu_list.style.cssText = 'top: 0px; opacity:1; transition: .5s ease-in; display:block; ');
}

function hide_menu(){
    main_menu_bg.style.cssText = 'top: -60px; opacity:0; transition: .3s ease-out; display: block;';
    submenu_list.forEach(submenu_list => 
        submenu_list.style.cssText = 'opacity:0; transition: .5s ease-out; display: block;');
}