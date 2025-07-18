import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  createLightBox,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};

const onSubmit = e => {
  e.preventDefault();

  clearGallery();
  showLoader();

  const searchQuery = e.target.elements['search-text'].value.trim();

  if (searchQuery === '') {
    hideLoader();

    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      refs.gallery.innerHTML = createGallery(data.hits);
      createLightBox();
    })
    .catch(err => console.log(err))
    .finally(() => hideLoader());
};

refs.form.addEventListener('submit', onSubmit);
