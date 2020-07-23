let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);

const main_menu = document.querySelector('#main_menu');
const main_menu_list = document.querySelectorAll('#main_menu_list>li');
const main_menu_title = document.querySelectorAll('.main_menu_title');
const submenu_list = document.querySelectorAll('.submenu_list');
const main_menu_bg = document.querySelector('#main_menu_bg');
const main_menu_bg_highlight = document.querySelector('#main_menu_bg_highlight');
const main_menu_wrap = document.querySelector('#main_menu_wrap');
const header_inner = document.querySelector('#header_inner');
const move_top = document.querySelector('#move_top');
let last_scroll_top = 162;
let scroll_value;

window.addEventListener('scroll', window_scroll);

main_menu_list.forEach(main_menu_list => 
    main_menu_list.addEventListener('mouseenter', function(){
        this.childNodes[1].style.cssText = 'color:#FFB000;';
    }));
main_menu_list.forEach(main_menu_list => 
    main_menu_list.addEventListener('mouseleave', function(){
        this.childNodes[1].style.cssText = 'color:white;';
    }));

function window_scroll(){
    let scroll_top = window.pageYOffset || document.documentElement.scroll_top;
    scroll_value = scroll_top;

    if( scroll_top > last_scroll_top ){
        main_menu.style.cssText = 'top:' + scroll_top + 'px;';
        main_menu_wrap.style.cssText = 'top:' + scroll_top + 
            'px; background-color:white; border-bottom:solid 1px rgba(0, 0, 0, 0.5);'
        main_menu_title.forEach(main_menu_title => main_menu_title.style.cssText = 'color:black;');
        main_menu_list.forEach(main_menu_list => 
            main_menu_list.addEventListener('mouseleave', function(){
                this.childNodes[1].style.cssText = 'color:black;';
            }));
    }
    else{
        main_menu.style.cssText = 'top:162px;';
        main_menu_title.forEach(main_menu_title => main_menu_title.style.cssText = 'color:white;');
        main_menu_list.forEach(main_menu_list => 
            main_menu_list.addEventListener('mouseleave', function(){
                this.childNodes[1].style.cssText = 'color:white;';
            }));
        main_menu_wrap.style.cssText = 'top:162px; background-color:rgb(25, 25, 25); border-top: solid 1px rgba(255, 255, 255, 0.2); border-bottom: solid 1px rgba(255, 255, 255, 0.2);';
    }

    if( scroll_value > document.body.scrollHeight/4 ){
        move_top.classList.add('show');

        if( Math.ceil(window.innerHeight + scroll_value) > document.body.scrollHeight - 100 )
            move_top.style.bottom = '325px';
        else
            move_top.style.bottom = '25px';
    }
    else{
        move_top.classList.remove('show');
        move_top.style.bottom = '-60px';
    }
}

move_top.addEventListener('click', () => {
    header_inner.scrollIntoView({behavior: 'smooth'});
});

main_menu_title.forEach(main_menu_title => main_menu_title.addEventListener('mouseenter', show_menu));
main_menu.addEventListener('mouseleave', hide_menu);

function show_menu(){
    // main_menu_list.forEach(list => list.classList.add('height'));
    main_menu_bg.style.cssText = 'opacity:1; transition: .3s ease-in; display:block;';
        submenu_list.forEach(submenu_list => 
            submenu_list.style.cssText = 'top: 0px; opacity:1; transition: .5s ease-in; display: block;');
        main_menu_bg_highlight.style.cssText = 'opacity:1; transition: .2s ease-in; display:block;'

    main_menu_bg_highlight.style.width = main_menu_list[0].offsetWidth + 'px';
    main_menu_bg_highlight.style.left = main_menu_list[getNodeindex(this.parentNode)].getBoundingClientRect().left + 'px';
}

function hide_menu(){
    // main_menu_list.forEach(list => list.classList.remove('height'));
    main_menu_bg.style.cssText = 'opacity:0; transition: .3s ease-out; display: none;';
    submenu_list.forEach(submenu_list => 
        submenu_list.style.cssText = 'opacity:0; transition: .5s ease-out; display: none;');
    main_menu_bg_highlight.style.cssText = 'opacity:0; transition: .2s ease-in; display:none;'
}