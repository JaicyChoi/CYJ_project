//main visual
const visual_list = document.querySelector('#visual_list');
const Main_Visual = DATA.Main_Visual;

for ( let item in Main_Visual ){
    let li = document.createElement('li');
    let img = document.createElement('img');

    li.classList.add('swiper-slide');
    img.classList.add('visual_img');

    img.src = '../../images/main_visual' + ( Number(item) + 1 ) + '.png';
    img.alt = Main_Visual[item];

    li.appendChild(img);
    visual_list.appendChild(li);
}

let visual_swiper = new Swiper('#visual', {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  //new beer arrivals
const new_beer_arrivals_list = document.querySelector('#new_beer_arrivals_list');
const New_Beer_Arrivals = DATA.New_Beer_Arrivals;

for( item in New_Beer_Arrivals ){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let country = document.createElement('img');
    let beer = document.createElement('img');
    let p = document.createElement('p');

    li.classList.add('new_beer_arrivals_preview');
    li.classList.add('swiper-slide');
    span.classList.add('new_beer_arrivals_abv');
    country.classList.add('new_beer_arrivals_country');
    beer.classList.add('new_beer_img');
    p.classList.add('new_beer_arrivals_title');

    span.innerHTML = New_Beer_Arrivals[item].abv;
    country.src = 'images/country/' + New_Beer_Arrivals[item].country + '.png';
    country.alt = New_Beer_Arrivals[item].country_alt;
    beer.src = 'images/beer/' + New_Beer_Arrivals[item].beer_img + '.png';
    beer.alt = New_Beer_Arrivals[item].beer_title;
    p.innerHTML = New_Beer_Arrivals[item].beer_title;

    li.appendChild(span);
    li.appendChild(country);
    li.appendChild(beer);
    li.appendChild(p);
    new_beer_arrivals_list.appendChild(li);
}

let new_beer_arrivals_swiper = new Swiper('#new_beer_arrivals', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    GrabCursor: true
});

//beer of the month
const beer_of_the_month_list = document.querySelector('#beer_of_the_month_list');
const list_wrapper = document.querySelector('#list_wrapper');
const Beer_of_the_Month = DATA.Beer_of_the_Month;

for( item in Beer_of_the_Month ){
    let outer_li = document.createElement('li');
    let beer_img = document.createElement('img');
    let ul = document.createElement('ul');
    let inner_li = document.createElement('li');
    let title = document.createElement('p');
    let country = document.createElement('img');
    let abv = document.createElement('p');
    let style = document.createElement('p');
    let flavor = document.createElement('p');
    let text = document.createElement('p');
    
    beer_img.classList.add('beer_img');
    ul.classList.add('beer_description');
    title.classList.add('eng_title');
    country.classList.add('beer_description_country');
    abv.classList.add('beer_description_text');
    style.classList.add('beer_description_text');
    flavor.classList.add('beer_description_text');
    text.classList.add('beer_description_text');
    
    beer_img.src = 'images/beer/' + Beer_of_the_Month[item].beer_img + '.png';
    beer_img.alt =  Beer_of_the_Month[item].beer_alt;
    title.innerHTML = Beer_of_the_Month[item].title;
    country.src = '../images/country/' + Beer_of_the_Month[item].country + '.png';
    country.alt = Beer_of_the_Month[item].country_alt;
    abv.innerHTML = 'ABV <span class="bold">' + Beer_of_the_Month[item].abv + '</span>';
    style.innerHTML = '맥주 스타일 <span class="bold">' + Beer_of_the_Month[item].style + '</span>';
    flavor.innerHTML = '맛/향 <span class="bold">' + Beer_of_the_Month[item].flavor + '</span>';
    text.innerHTML = Beer_of_the_Month[item].text;
    
    inner_li.appendChild(title);
    inner_li.appendChild(country);
    inner_li.appendChild(abv);
    inner_li.appendChild(style);
    inner_li.appendChild(flavor);
    inner_li.appendChild(text);
    ul.appendChild(inner_li);
    outer_li.appendChild(beer_img);
    outer_li.appendChild(ul);
    beer_of_the_month_list.appendChild(outer_li);
}

const beer_list =  document.querySelectorAll('#beer_of_the_month_list>li')
const prev_arrow = document.querySelector('#prev_arrow');
const next_arrow = document.querySelector('#next_arrow');
let click = true;

function onclick(){
    if( click ){
        click = !click;
        setTimeout(function(){ click = true;}, 300);
    }
}

next_arrow.addEventListener('click', function() {    
    if( click === true && beer_of_the_month_list.offsetLeft === -beer_list[0].offsetWidth  *  ( beer_list.length - 1 ) ){
        beer_of_the_month_list.style.left = beer_of_the_month_list.offsetLeft + 'px';
    }
    // else
    //     beer_of_the_month_list.style.left = beer_of_the_month_list.offsetLeft + (-beer_list[0].offsetWidth) + 'px';
    else if( click === true && beer_of_the_month_list.offsetLeft <= 0  ){
        beer_of_the_month_list.style.left = beer_of_the_month_list.offsetLeft + (-beer_list[0].offsetWidth) + 'px';
    }

    onclick();
});

prev_arrow.addEventListener('click', function() {
    if(  click === true && beer_of_the_month_list.offsetLeft === 0 )
        beer_of_the_month_list.style.left = beer_of_the_month_list.offsetLeft + 'px';
    // else
    //     beer_of_the_month_list.style.left = beer_of_the_month_list.offsetLeft + beer_list[0].offsetWidth + 'px';
    else if( click === true && beer_of_the_month_list.offsetLeft >= -beer_list[0].offsetWidth  *  ( beer_list.length - 1 ) )
        beer_of_the_month_list.style.left = beer_of_the_month_list.offsetLeft + beer_list[0].offsetWidth + 'px';

    onclick();
});