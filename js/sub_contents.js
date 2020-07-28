//most popular beer
const most_popular_beer_list = document.querySelector('#most_popular_beer_list');
const Most_Popular_Beer = DATA.Most_Popular_Beer;
const beer_prev = document.querySelector('#beer_prev');
const beer_next = document.querySelector('#beer_next');
let beer_list_left;

beer_prev.style.display = 'none';

beer_prev.addEventListener('click', function(){
    beer_list_left = most_popular_beer_list.childNodes[0].offsetWidth;
    beer_next.style.display = 'block';

    if( most_popular_beer_list.offsetLeft === 0 )
        most_popular_beer_list.style.left = '0px';
    else if( most_popular_beer_list.offsetLeft === -beer_list_left ){
        most_popular_beer_list.style.left = '0px';
        beer_prev.style.display = 'none';
    }
    else
        most_popular_beer_list.style.left = -beer_list_left + 'px';
})
beer_next.addEventListener('click', function(){
    beer_list_left = most_popular_beer_list.childNodes[0].offsetWidth;
    beer_prev.style.display = 'block';

    if( most_popular_beer_list.offsetLeft === 0 )
        most_popular_beer_list.style.left = -beer_list_left + 'px';
    else if( most_popular_beer_list.offsetLeft === -beer_list_left ){
        most_popular_beer_list.style.left = (-beer_list_left * 2) + 'px';
        beer_next.style.display = 'none';
    }
    else
        most_popular_beer_list.style.left = (-beer_list_left * 2) + 'px';
});

for( let i = 0 ; i < Most_Popular_Beer.length ; i++ ){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let most_popular_beer_abv = document.createElement('span');
    let most_popular_beer_country = document.createElement('img');
    let most_popular_beer_preview = document.createElement('img');
    let most_popular_beer_title = document.createElement('p');

    a.setAttribute('href', '#');
    most_popular_beer_abv.innerHTML = Most_Popular_Beer[i].abv;
    most_popular_beer_country.src = 'images/country/' + Most_Popular_Beer[i].country + '.png';
    most_popular_beer_country.alt = Most_Popular_Beer[i].country_alt;
    most_popular_beer_preview.src = 'images/beer/' + Most_Popular_Beer[i].beer + '.png';
    most_popular_beer_preview.alt = Most_Popular_Beer[i].beer_alt;
    most_popular_beer_title.innerHTML = Most_Popular_Beer[i].title;

    most_popular_beer_abv.classList.add('most_popular_beer_abv');
    most_popular_beer_country.classList.add('most_popular_beer_country');
    most_popular_beer_preview.classList.add('most_popular_beer_preview');
    most_popular_beer_title.classList.add('most_popular_beer_title');

    a.appendChild(most_popular_beer_abv);
    a.appendChild(most_popular_beer_country);
    a.appendChild(most_popular_beer_preview);
    a.appendChild(most_popular_beer_title);
    li.appendChild(a);
    most_popular_beer_list.appendChild(li);
}

//category
const view_all = document.querySelector('#view_all');
const category_title = document.querySelectorAll('.category_title');
const category_detail = document.querySelectorAll('.category_detail');

view_all.addEventListener('click', function(){
    category_title.forEach(category_title => category_title.classList.remove(('category_title_active')));
    category_detail.forEach(category_detail => category_detail.classList.remove('category_detail_active'));
});

category_title.forEach(category_title => category_title.addEventListener('click', function(){
    category_title.classList.toggle('category_title_active');
    this.nextElementSibling.classList.toggle('category_detail_active');

    // if( category_title.classList.contains('category_title_active'))
    //     this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
    // else
    //     this.nextElementSibling.maxHeight = 0;
}));

//search result
const result_preview = document.querySelector('#result_preview');
const Search_Result = DATA.Search_Result;

// for( let i = 0 ; i < Search_Result.length ; i++ ){
//     let li = document.createElement('li');
//     let a  = document.createElement('a');
//     let result_preview_abv = document.createElement('span');
//     let result_preview_country = document.createElement('img');
//     let result_preview_beer = document.createElement('img');
//     let result_preview_title = document.createElement('p');

//     result_preview_abv.classList.add('result_preview_abv');
//     result_preview_country.classList.add('result_preview_country');
//     result_preview_beer.classList.add('result_preview_beer');
//     result_preview_title.classList.add('result_preview_title');

//     a.href = Search_Result[i].href;
//     result_preview_abv.innerHTML = Search_Result[i].abv;
//     result_preview_country.src = 'images/country/' + Search_Result[i].country + '.png';
//     result_preview_country.alt = Search_Result[i].country_alt;
//     result_preview_beer.src = 'images/beer/' + Search_Result[i].beer + '.png';
//     result_preview_beer.alt = Search_Result[i].beer_alt;
//     result_preview_title.innerHTML = Search_Result[i].title;

//     a.appendChild(result_preview_abv);
//     a.appendChild(result_preview_country);
//     a.appendChild(result_preview_beer);
//     a.appendChild(result_preview_title);
//     li.appendChild(a);
//     result_preview.appendChild(li);
// }

let li = document.createElement('li');
let a  = document.createElement('a');
let result_preview_abv = document.createElement('span');
let result_preview_country = document.createElement('img');
let result_preview_beer = document.createElement('img');
let result_preview_title = document.createElement('p');

result_preview_abv.classList.add('result_preview_abv');
result_preview_country.classList.add('result_preview_country');
result_preview_beer.classList.add('result_preview_beer');
result_preview_title.classList.add('result_preview_title');

a.href = Search_Result[4].href;
result_preview_abv.innerHTML = Search_Result[4].abv;
result_preview_country.src = 'images/country/' + Search_Result[4].country + '.png';
result_preview_country.alt = Search_Result[4].country_alt;
result_preview_beer.src = 'images/beer/' + Search_Result[4].beer + '.png';
result_preview_beer.alt = Search_Result[4].beer_alt;
result_preview_title.innerHTML = Search_Result[4].title;

a.appendChild(result_preview_abv);
a.appendChild(result_preview_country);
a.appendChild(result_preview_beer);
a.appendChild(result_preview_title);
li.appendChild(a);
result_preview.appendChild(li);

//search result gernate li
for( let i = 0 ; i < 17 ; i++ ){
    let preview_list = document.createElement('li');
    let preview_link = document.createElement('a');
    let preview_list_text = document.createElement('span')

    preview_list_text.innerHTML = 'Preview';
    preview_list_text.classList.add('preview_text');
        
    document.getElementById('result_preview').appendChild(preview_list);
    preview_list.appendChild(preview_link);
    preview_link.setAttribute('href', '#');
    preview_link.appendChild(preview_list_text);
}