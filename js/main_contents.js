let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);

//New beer arrivals
const new_beer_arrivals_abv = document.querySelector('#new_beer_arrivals_abv');
const new_beer_arrivals_country = document.querySelector('#new_beer_arrivals_country');
const new_beer_arrivals_beer = document.querySelector('#new_beer_arrivals_beer');
const new_beer_arrivals_title = document.querySelector('#new_beer_arrivals_title');
const new_beer_list = document.querySelectorAll('#new_beer_list li');
// const new_beer_list = document.querySelectorAll('.beer_list');
const New_Beer_Arrivals = DATA.New_Beer_Arrivals;

new_beer_list.forEach(new_beer_list =>
    new_beer_list.addEventListener('mouseenter', show_beer_preview));

function show_beer_preview(){
    console.log(getNodeindex(this));
    new_beer_arrivals_abv.innerHTML = New_Beer_Arrivals[getNodeindex(this)].abv;
    new_beer_arrivals_country.src = 'images/country/' + New_Beer_Arrivals[getNodeindex(this)].country + '/.png';
    new_beer_arrivals_country.alt = New_Beer_Arrivals[getNodeindex(this)].country_alt;
    new_beer_arrivals_beer.src = 'images/beer/' + New_Beer_Arrivals[getNodeindex(this)].beer + '.png';
    new_beer_arrivals_beer.alt = New_Beer_Arrivals[getNodeindex(this)].beer_alt;
    new_beer_arrivals_title.innerHTML = New_Beer_Arrivals[getNodeindex(this)].title;
}

//Beer of the month
const beer_preview = document.querySelector('#beer_preview');
const beer_description_title = document.querySelector('#beer_description_title');
const beer_description_country = document.querySelector('#beer_description_country');
const beer_description_abv = document.querySelector('#beer_description_abv');
const beer_description_style = document.querySelector('#beer_description_style');
const beer_description_text = document.querySelector('#beer_description_text');
const selected_beer = document.querySelectorAll('.selected_beer');
const Beer_of_the_Month = DATA.Beer_of_the_Month;

Beer_of_the_Month_init();

function Beer_of_the_Month_init(){
    selected_beer[0].classList.add('mouseover');

    beer_preview.src = 'images/beer/' + Beer_of_the_Month[0].beer_img + '.png';
    beer_preview.alt = Beer_of_the_Month[0].beer_alt;
    beer_description_title.innerHTML = Beer_of_the_Month[0].title;
    beer_description_country.src = 'images/contury/' + Beer_of_the_Month[0].country + '.png';
    beer_description_country.alt = Beer_of_the_Month[0].country_alt;
    beer_description_abv.innerHTML = Beer_of_the_Month[0].abv;
    beer_description_style.innerHTML = Beer_of_the_Month[0].style;
    beer_description_flavor.innerHTML = Beer_of_the_Month[0].flavor;
    beer_description_text.innerHTML = Beer_of_the_Month[0].text;
}

selected_beer.forEach(selected_beer => 
    selected_beer.addEventListener('mouseenter', show_description));

function show_description(){
    selected_beer.forEach(selected_beer => 
        selected_beer.classList.remove('mouseover'));
    this.classList.add('mouseover');
    
    beer_preview.src = 'images/beer/' + Beer_of_the_Month[getNodeindex(this)].beer_img + '.png';
    beer_preview.alt = Beer_of_the_Month[getNodeindex(this)].beer_alt;
    beer_description_title.innerHTML = Beer_of_the_Month[getNodeindex(this)].title;
    beer_description_country.src = 'images/contury/' + Beer_of_the_Month[getNodeindex(this)].country + '.png';
    beer_description_country.alt = Beer_of_the_Month[getNodeindex(this)].country_alt;
    beer_description_abv.innerHTML = Beer_of_the_Month[getNodeindex(this)].abv;
    beer_description_style.innerHTML = Beer_of_the_Month[getNodeindex(this)].style;
    beer_description_flavor.innerHTML = Beer_of_the_Month[getNodeindex(this)].flavor;
    beer_description_text.innerHTML = Beer_of_the_Month[getNodeindex(this)].text;
}