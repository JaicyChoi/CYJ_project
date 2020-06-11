let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);

let menu_swiper = new Swiper('#main_menu', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    GrabCursor: true
});