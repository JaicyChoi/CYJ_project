//beer detail description
const slide_list = document.querySelectorAll('#slide_list li');
const Beer_Detail_Description = DATA.Beer_Detail_Description;

for( let i = 0 ; i < Beer_Detail_Description.length ; i++ ){
    let beer_detail_text = document.createElement('p');

    beer_detail_text.innerHTML = Beer_Detail_Description[i];
    beer_detail_text.classList.add('beer_detail_text');
    slide_list[i].appendChild(beer_detail_text);
}