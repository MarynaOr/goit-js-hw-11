

function createMarkup (arr) {
    return arr.map((item) => `
<li class='gallery-item'>
    <a href='${item.largeImageUrl}'>
      <img class='img' src='${item.webformatUrl}' alt='${item.tags}'/>
    </a>
    <div class='card'>
      <p class='item-info'>Likes<span>${item.likes}</span></p>
      <p class='item-info'>Views<span>${item.views}</span></p>
      <p class='item-info'>Comments<span>${item.comments}</span></p>
      <p class='item-info'>Downloads<span>${item.downloads}</span></p>
    </div>
</li>
    `).join('')
}
export default createMarkup;



























