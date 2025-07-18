import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
  return images
    .map(
      item => `<li class = "gallery-item"><a href = "${item.largeImageURL}"><img class = "gallery-img" src = "${item.webformatURL}" alt = "${item.tags}"> </a> 
       <div class="info">
    <div class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${item.likes}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${item.views}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${item.comments}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${item.downloads}</p>
    </div>
  </div>
          
  </li>`
    )
    .join('');
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';
}

export function hideLoader() {
  const loader = document.querySelector('.loader');

  loader.classList.add('is-hidden');
}

export function showLoader() {
  const loader = document.querySelector('.loader');

  loader.classList.remove('is-hidden');
}

const lightBox = new SimpleLightbox('.gallery a');
export function createLightBox() {
  lightBox.refresh();
}
