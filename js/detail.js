//beer detail description
const slide_list = document.querySelectorAll('#slide_list li');
const Beer_Detail_Description = DATA.Beer_Detail_Description;

for( let i = 0 ; i < Beer_Detail_Description.length ; i++ ){
    let beer_detail_text = document.createElement('p');

    beer_detail_text.innerHTML = Beer_Detail_Description[i];
    beer_detail_text.classList.add('beer_detail_text');
    slide_list[i].appendChild(beer_detail_text);
}

//more_info
const glass = document.querySelector('#glass');
const temperature = document.querySelector('#temperature');
const match_food = document.querySelector('#match_food');
const match_recipe = document.querySelector('#match_recipe');
const Glass = DATA.Glass[0];
const Temperature = DATA.Temperature[0];
const Food = DATA.Food;
const Recipe = DATA.Recipe;

let glass_img  = document.createElement('img');
let glass_text = document.createElement('p');

glass_img.src = 'images/icon/' + Glass.img + '.png';
glass_img.alt = Glass.img_alt;
glass_text.innerHTML = Glass.text;

glass.appendChild(glass_img);
glass.appendChild(glass_text);

let temperature_img = document.createElement('img');
let temperature_text = document.createElement('p');

temperature_img.src = 'images/icon/' + Temperature.img + '.png';
temperature_img.alt = Temperature.img_alt;
temperature_text.innerHTML = Temperature.text;

temperature.appendChild(temperature_img);
temperature.appendChild(temperature_text);

for( let i = 0 ; i < Food.length; i++ ){
    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');

    p.classList.add('more_info_text');

    img.src = 'images/icon/' + Food[i].img + '.png';
    img.alt = Food[i].img_alt;
    p.innerHTML = Food[i].text;

    li.appendChild(img);
    li.appendChild(p);
    match_food.appendChild(li);
}

for( let i = 0 ; i < Recipe.length ; i++ ){
    let li = document.createElement('li');
    let img = document.createElement('img');

    img.src = 'images/' + Recipe[i].img + '.png';
    img.alt = Recipe[i].img_alt;

    li.appendChild(img);
    match_recipe.appendChild(li);
}

const recipe_list = document.querySelectorAll('#match_recipe li');

recipe_list.forEach(recipe_list => recipe_list.addEventListener('mouseenter', function(){
    let div = document.createElement('div');
    let p = document.createElement('p');

    div.classList.add('match_recipe_preview');

    p.innerHTML = Recipe[getNodeindex(this)].text;
    div.appendChild(p);
    this.appendChild(div);
}));

recipe_list.forEach(recipe_list => recipe_list.addEventListener('mouseleave', function(){
    this.removeChild(this.lastChild);
}));

//total user review
const average = document.querySelector('#average');
const count = document.querySelector('#count');
const graph = document.querySelector('#graph');
const Average_Grade = DATA.Average_Grade[0];
const Drink_Count = DATA.Drink_Count[0];
const Flavor_Graph = DATA.Flavor_Graph[0];

let grade = document.createElement('img');
let average_text = document.createElement('p');
let average_highlight = document.createElement('span');

grade.src = 'images/icon/' + Average_Grade.img + '.png';
grade.alt = Average_Grade.img_alt;

average_text.classList.add('subtitle_text');
average_text.id = 'average_text';
average_highlight.classList.add('highlight');

average_highlight.innerHTML = Average_Grade.grade;

average_text.innerHTML = '/ 5.0';
average_text.prepend(average_highlight);
average.appendChild(grade);
average.appendChild(average_text);

let count_text = document.createElement('p');
let count_highlight = document.createElement('span');

count_text.classList.add('subtitle_text');
count_text.id = 'count_text';
count_highlight.classList.add('highlight');

count_text.innerHTML = ' 명';
count_highlight.innerHTML = Drink_Count;
count_text.prepend(count_highlight);
count.appendChild(count_text);

let graph_img = document.createElement('img');
graph_img.src = 'images/icon/' + Flavor_Graph + '.png';

graph.appendChild(graph_img);

//best_review
const best_review_top3 = document.querySelector('#best_review_top3');
const Best_Review = DATA.Best_Review;

for( let i = 0 ; i < Best_Review.length; i++ ){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let review_text = document.createElement('p');

    a.setAttribute('href', '#');
    review_text.classList.add('best_review_text');

    img.src = 'images/best_review' + ( i + 1 ) + '.png';
    img.alt = Best_Review[i].img_alt;
    review_text.innerHTML = Best_Review[i].text;

    div.appendChild(img);
    a.appendChild(div);
    a.appendChild(review_text);
    li.appendChild(a);
    best_review_top3.appendChild(li);
}

const best_review_list = document.querySelectorAll('#best_review_top3 li');

best_review_list.forEach(best_review_list => best_review_list.addEventListener('mouseenter', function(){
    let user_count = document.createElement('p');
    let view_count = document.createElement('span');
    let recommend_count = document.createElement('span');

    user_count.classList.add('user_count');
    view_count.classList.add('view_count');
    recommend_count.classList.add('recommend_count');

    view_count.innerHTML = Best_Review[getNodeindex(this)].view_count;
    recommend_count.innerHTML = Best_Review[getNodeindex(this)].recommend_count;
    
    user_count.appendChild(view_count);
    user_count.appendChild(recommend_count);
    this.childNodes[0].firstChild.appendChild(user_count);

    this.childNodes[0].lastChild.style.cssText = 'text-decoration:underline; opacity:1;'
}));

best_review_list.forEach(best_review_list => best_review_list.addEventListener('mouseleave', function(){
    (this.childNodes[0].firstChild).removeChild(this.childNodes[0].firstChild.lastChild);
    this.childNodes[0].lastChild.style.cssText = 'text-decoration:none; opacity:0.8;'
}));

//detail review
const detail_reviews = document.querySelector('#detail_review_list');
const Detail_Review = DATA.Detail_Review;

for( let i = 0 ; i < Detail_Review.length; i++ ){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let div = document.createElement('div');
    let id = document.createElement('p');
    let grade = document.createElement('p');
    let text = document.createElement('p');

    a.setAttribute('href', '#');
    div.classList.add('detail_review_text');
    id.classList.add('id');
    grade.classList.add('grade');
    text.classList.add('user_text');
    
    img.src = 'images/detail_review' + ( i + 1 ) + '.png';
    img.alt = Detail_Review[i].img_alt;
    id.innerHTML = Detail_Review[i].nickname;
    grade.innerHTML = Detail_Review[i].grade;
    text.innerHTML = Detail_Review[i].text;

    div.appendChild(id);
    div.appendChild(grade);
    div.appendChild(text);
    a.appendChild(img);
    a.appendChild(div);
    li.appendChild(a);
    detail_reviews.appendChild(li);
}

const detail_review_list = document.querySelectorAll('#detail_review_list li');

detail_review_list.forEach(detail_review_list => detail_review_list.addEventListener('mouseenter', function(){
    this.childNodes[0].firstChild.style.cssText = 'opacity: 0.4';
    this.childNodes[0].lastChild.lastChild.style.cssText = 'text-decoration:underline; opacity:1;'
}));

detail_review_list.forEach(detail_review_list => detail_review_list.addEventListener('mouseleave', function(){
    this.childNodes[0].firstChild.style.cssText = 'opacity:1';
    this.childNodes[0].lastChild.lastChild.style.cssText = 'text-decoration:none; opacity:0.8;'
}));

const user_review_page_number = detail_reviews.nextElementSibling;

for( let i = 0 ; i < 3 ; i++ ){
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', '#');
    a.innerHTML = i + 1;
    li.appendChild(a);
    user_review_page_number.appendChild(li);
}

//user comment
const beer_comment = document.querySelector('#beer_comment');
const User_Comment = DATA.User_Comment;

for( let i = 0 ; i < User_Comment.length ; i++ ){
    let li = document.createElement('li');
    let div = document.createElement('div');
    let comment = document.createElement('span');
    let nickname = document.createElement('span');
    let recommend = document.createElement('span');
    let date = document.createElement('span');

    div.classList.add('profile_img');
    comment.classList.add('user_comment');
    nickname.classList.add('nickname');
    recommend.classList.add('recommend');
    date.classList.add('date');

    div.style.cssText = 'background:url(../images/user_profile' + ( i + 1 ) + '.jpg) no-repeat;';
    comment.innerHTML = User_Comment[i].comment;
    nickname.innerHTML = 'by.' + User_Comment[i].nickname;
    recommend.innerHTML = User_Comment[i].recommend;
    date.innerHTML = User_Comment[i].date;

    li.appendChild(div);
    li.appendChild(comment);
    li.appendChild(nickname);
    li.appendChild(recommend);
    li.appendChild(date);
    beer_comment.appendChild(li);
}

const user_comment_page_number = beer_comment.nextElementSibling;

for( let i = 0 ; i < 3 ; i++ ){
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', '#');
    a.innerHTML = i + 1;
    li.appendChild(a);
    user_comment_page_number.appendChild(li);
}