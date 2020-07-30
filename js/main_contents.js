//New beer arrivals
const new_beer_preview = document.querySelector('#new_beer_preview');
const new_beer_list = document.querySelector('#new_beer_list');
const New_Beer_Arrivals = DATA.New_Beer_Arrivals;

for( let i = 0 ; i < New_Beer_Arrivals.length - 1; i++ ){
    let new_beer_li = document.createElement('li');
    new_beer_li.innerHTML = '<a href="#">' + New_Beer_Arrivals[i].title + '</a>';
    new_beer_list.appendChild(new_beer_li);
}

const new_beer_list_li = document.querySelectorAll('#new_beer_list li');
let new_beer_arrivals_abv = document.createElement('span');
let new_beer_arrivals_country = document.createElement('img');
let new_beer_arrivals_beer = document.createElement('img');
let new_beer_arrivals_title = document.createElement('p');

new_beer_arrivals_abv.id = 'new_beer_arrivals_abv';
new_beer_arrivals_country.id = 'new_beer_arrivals_country';
new_beer_arrivals_beer.id = 'new_beer_arrivals_beer';
new_beer_arrivals_title.id = 'new_beer_arrivals_title';

new_beer_preview.appendChild(new_beer_arrivals_abv);
new_beer_preview.appendChild(new_beer_arrivals_country);
new_beer_preview.appendChild(new_beer_arrivals_beer);
new_beer_preview.appendChild(new_beer_arrivals_title);

(function New_Beer_Arrivals_init(){
    new_beer_arrivals_abv.innerHTML = New_Beer_Arrivals[0].abv;
    new_beer_arrivals_country.src = 'images/country/' + New_Beer_Arrivals[0].country + '.png';
    new_beer_arrivals_country.alt = New_Beer_Arrivals[0].country_alt;
    new_beer_arrivals_beer.src = 'images/beer/' + New_Beer_Arrivals[0].beer + '.png';
    new_beer_arrivals_beer.alt = New_Beer_Arrivals[0].beer_alt;
    new_beer_arrivals_title.innerHTML = New_Beer_Arrivals[0].title;
}());

new_beer_list_li.forEach(li =>
    li.addEventListener('mouseenter', show_beer_preview));
new_beer_list_li.forEach(li =>
    li.addEventListener('focusin', show_beer_preview));

function show_beer_preview(){
    new_beer_arrivals_abv.innerHTML = New_Beer_Arrivals[getNodeindex(this)].abv;
    new_beer_arrivals_country.src = 'images/country/' + New_Beer_Arrivals[getNodeindex(this)].country + '.png';
    new_beer_arrivals_country.alt = New_Beer_Arrivals[getNodeindex(this)].country_alt;
    new_beer_arrivals_beer.src = 'images/beer/' + New_Beer_Arrivals[getNodeindex(this)].beer + '.png';
    new_beer_arrivals_beer.alt = New_Beer_Arrivals[getNodeindex(this)].beer_alt;
    new_beer_arrivals_title.innerHTML = New_Beer_Arrivals[getNodeindex(this)].title;
}

//Magazine
const magazine_preview = document.querySelector('#magazine_preview');
const magazine_text = document.querySelector('#magazine_text');
const Magazine = DATA.Magazine[0];

magazine_preview.alt = Magazine.alt;
magazine_text.innerHTML = Magazine.text;

//Beer of the month
const beer_preview = document.querySelector('#beer_preview');
const beer_description = document.querySelector('#beer_description');
const beer_select = document.querySelector('#beer_select');
const Beer_of_the_Month = DATA.Beer_of_the_Month;

for( let i = 0 ; i <= Beer_of_the_Month.length - 1 ; i++ ){
    let beer_select_li = document.createElement('li');
    let beer_select_img = document.createElement('img');
    
    beer_select_img.src = 'images/beer/' + Beer_of_the_Month[i].beer_img + '.png';
    beer_select_img.alt = Beer_of_the_Month[i].beer_alt;
    beer_select_li.appendChild(beer_select_img);
    beer_select.appendChild(beer_select_li);
}

const selected_beer = document.querySelectorAll('#beer_select li');
let beer_description_title = document.createElement('p');
let beer_description_country = document.createElement('img');
let beer_description_abv = document.createElement('p');
let beer_description_style = document.createElement('p');
let beer_description_flavor = document.createElement('p');
let beer_description_text = document.createElement('p');

beer_description_title.id = 'beer_description_title';
beer_description_country.id = 'beer_description_country';
beer_description_abv.id = 'beer_description_abv';
beer_description_style.id = 'beer_description_style';
beer_description_flavor.id = 'beer_description_flavor';
beer_description_text.id = 'beer_description_text';

beer_description.appendChild(beer_description_title);
beer_description.appendChild(beer_description_country);
beer_description.appendChild(beer_description_abv);
beer_description.appendChild(beer_description_style);
beer_description.appendChild(beer_description_flavor);
beer_description.appendChild(beer_description_text);

(function Beer_of_the_Month_init(){
    selected_beer[0].classList.add('mouseover');

    beer_preview.src = 'images/beer/' + Beer_of_the_Month[0].beer_img + '.png';
    beer_preview.alt = Beer_of_the_Month[0].beer_alt;
    beer_description_title.innerHTML = Beer_of_the_Month[0].title;
    beer_description_country.src = 'images/country/' + Beer_of_the_Month[0].country + '.png';
    beer_description_country.alt = Beer_of_the_Month[0].country_alt;
    beer_description_abv.innerHTML = Beer_of_the_Month[0].abv;
    beer_description_style.innerHTML = Beer_of_the_Month[0].style;
    beer_description_flavor.innerHTML = Beer_of_the_Month[0].flavor;
    beer_description_text.innerHTML = Beer_of_the_Month[0].text;
}());

selected_beer.forEach(selected_beer => 
    selected_beer.addEventListener('mouseenter', show_description));

function show_description(){
    selected_beer.forEach(selected_beer => 
        selected_beer.classList.remove('mouseover'));
    this.classList.add('mouseover');
    
    beer_preview.src = 'images/beer/' + Beer_of_the_Month[getNodeindex(this)].beer_img + '.png';
    beer_preview.alt = Beer_of_the_Month[getNodeindex(this)].beer_alt;
    beer_description_title.innerHTML = Beer_of_the_Month[getNodeindex(this)].title;
    beer_description_country.src = 'images/country/' + Beer_of_the_Month[getNodeindex(this)].country + '.png';
    beer_description_country.alt = Beer_of_the_Month[getNodeindex(this)].country_alt;
    beer_description_abv.innerHTML = Beer_of_the_Month[getNodeindex(this)].abv;
    beer_description_style.innerHTML = Beer_of_the_Month[getNodeindex(this)].style;
    beer_description_flavor.innerHTML = Beer_of_the_Month[getNodeindex(this)].flavor;
    beer_description_text.innerHTML = Beer_of_the_Month[getNodeindex(this)].text;
}

//Weekly best reviewer
const best_review_img = document.querySelector('#best_review_img');
const weekly_best_reviewer = document.querySelector('#weekly_best_reviewer');
const weekly_best_recipe = document.querySelector('#weekly_best_recipe');
const hottest_pub_store = document.querySelector('#hottest_pub_store');
const Weekly_Best_Review = DATA.Weekly_Best_Review;
const preview_box = document.querySelectorAll('.preview_box');

let user_count = document.createElement('p');
let view_count = document.createElement('span')
let recommend_count = document.createElement('span');
let preview_title = document.createElement('span');

user_count.classList.add('user_count');
view_count.classList.add('view_count');
recommend_count.classList.add('recommend_count');
preview_title.classList.add('preview_title');

for( let i = 0 ; i <= Weekly_Best_Review.length - 1 ; i++ ){
    let review_text = document.createElement('p');
    review_text.classList.add('review_text');
    review_text.innerHTML = Weekly_Best_Review[i].text;
    preview_box[i].parentNode.parentNode.appendChild(review_text);
}

user_count.appendChild(view_count);
user_count.appendChild(recommend_count);
user_count.appendChild(preview_title);

preview_box.forEach(preview_box => 
    preview_box.parentNode.parentNode.addEventListener('mouseenter', show_info));
preview_box.forEach(preview_box => 
    preview_box.parentNode.parentNode.addEventListener('mouseleave', hide_info));

function show_info(){
    this.childNodes[1].childNodes[3].appendChild(user_count);
    this.childNodes[1].childNodes[3].lastChild.style.cssText = 'display: block';

    let find_section = this.id;
    let section_num;

    if( find_section === weekly_best_reviewer.id.toString() ) section_num = 0;
    else if( find_section === weekly_best_recipe.id.toString() ) section_num = 1;
    else section_num = 2;
  
    best_review_img.alt = Weekly_Best_Review[section_num].preview_alt;
    view_count.innerHTML = Weekly_Best_Review[section_num].view_count;
    recommend_count.innerHTML = Weekly_Best_Review[section_num].recommend_count;
    preview_title.innerHTML = Weekly_Best_Review[section_num].preview_title;

    this.lastChild.style.cssText = 'opacity: 1; text-decoration: underline;';
}

function hide_info(){
    this.childNodes[1].childNodes[3].lastChild.style.cssText = 'display:none;';
    this.lastChild.style.cssText = 'opacity: 0.8; text-decoration: none;';
}

//view_latest_event
const view_latest_event_box = document.querySelector('#view_latest_event_box');
const View_Latest_Event = DATA.View_Latest_Event;

for( let i = View_Latest_Event.length - 1 ; i >= 0 ; i-- ){
    let a = document.createElement('a');
    let event_preview_box = document.createElement('div');
    let event_preview = document.createElement('img');

    a.href = '#';
    event_preview_box.classList.add('event_preview_box');
    event_preview.classList.add('event_preview');

    event_preview.src= 'images/event' + ( i + 1 ) + '.png';
    event_preview.alt = View_Latest_Event[i];
    event_preview_box.appendChild(event_preview);
    a.appendChild(event_preview_box);

    view_latest_event_box.insertBefore(a, view_latest_event_box.firstChild);
}