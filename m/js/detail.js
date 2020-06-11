//tab menu controll
const tab_menu = document.querySelectorAll('#tab_menu li');

tab_menu.forEach(tab_menu => tab_menu.addEventListener('click', function(){
    let current = document.querySelectorAll('.current');
    let tab_menu_id = tab_menu.getAttribute('data-tab');

    current.forEach(current => current.classList.remove('current'));

    tab_menu.classList.add('current');
    document.querySelector('#' + tab_menu_id).classList.add('current');
}));
//jQuery version
// $(document).ready(function(){
//     $('#tab_menu li').click(function(){
//         let tab_menu_id = $(this).attr('data-tab');

//         $('#tab_menu li').removeClass('current');
//         $('.tab_content').removeClass('current');

//         $(this).addClass('current');
//         $('#' + tab_menu_id).addClass('current');
//     });
// });

//match recipe
const match_recipe_wrapper = document.querySelector('#match_recipe_wrapper');
const match_recipe_list = document.querySelectorAll('#match_recipe li');
// let width = match_recipe_list[0].offsetWidth;
// match_recipe.style.minWidth = `${match_recipe_list.length * width}px`;
let start, change;

match_recipe_wrapper.addEventListener('dragstart', (e) => {
    start = e.clientX;
});
match_recipe_wrapper.addEventListener('dragover', (e) => {
    e.preventDefault();
    let touch = e.clientX;
    change = start - touch;
});
match_recipe_wrapper.addEventListener('dragend', slideShow);

//mobile touch event
match_recipe_wrapper.addEventListener('touchstart', (e) => {
    start = e.touches[0].clientX;
});
match_recipe_wrapper.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let touch = e.touches[0]; //touches 객체 : 현재 화면을 터지하고 있는 모든 접촉점의 터치 리스트
    change = start - touch.clientX;
})
match_recipe_wrapper.addEventListener('touchend', slideShow);

function slideShow(){
    if(change > 0)
        this.scrollLeft += this.childNodes[1].childNodes[1].offsetWidth;
    else
        this.scrollLeft -= this.childNodes[1].childNodes[1].offsetWidth;
}

//best_review
const best_review_list_wrapper = document.querySelector('#best_review_list_wrapper');
const best_review_list = document.querySelectorAll('#best_review_list li');

best_review_list_wrapper.addEventListener('dragstart', (e) => {
    start = e.clientX;
});
best_review_list_wrapper.addEventListener('dragover', (e) => {
    e.preventDefault();
    let touch = e.clientX;
    change = start - touch;
});
best_review_list_wrapper.addEventListener('dragend', slideShow);

//mobile touch event
best_review_list_wrapper.addEventListener('touchstart', (e) => {
    start = e.touches[0].clientX;
});
best_review_list_wrapper.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let touch = e.touches[0];
    change = start - touch.clientX;
})
best_review_list_wrapper.addEventListener('touchend', slideShow);

const other_detail_list = document.querySelectorAll('#other_detail_list li');

let text_length = 60; // 표시할 글자수 기준
if( screen.width <= 380 ){
    other_detail_list.forEach(function(other_detail_list){
        if( other_detail_list.childNodes[7].innerText.length > text_length )
            other_detail_list.childNodes[7].innerText = other_detail_list.childNodes[7].innerText.substr(0, text_length-2) + '...';
    });
}