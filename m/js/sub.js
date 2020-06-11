for( let i = 0 ; i < 13 ; i++ )
{
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

let swiper = new Swiper('#most_popular_beers', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    GrabCursor: true
  });