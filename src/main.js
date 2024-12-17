import { fetchImg } from './js/pixabay-api';
import {
  createMarkup,
  showLoadingMessage,
  hideLoadingMessage,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImage = new SimpleLightbox('.item-gallery a', {
  captionsData: 'alt',
  captionDelay: 300,
  className: 'bg-color',
});

const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const input = form.querySelector('label input');
const load = document.querySelector('.load');

form.addEventListener('submit', handleSubmit);
let search = '';
function handleSubmit(event) {
  event.preventDefault();
  search = event.target.elements.search.value.trim();

  if (search === '') {
    hideLoadingMessage(load);
    iziToast.warning({
      title: 'Caution',
      message: 'The field is empty, please type your request',
    });
    return;
  }
  if (search) {
    showLoadingMessage(load);
  }

  fetchImg(search)
    .then(response => {
      if (response.total === 0) {
        gallery.innerHTML = '';
        throw new Error();
      }

      hideLoadingMessage(load);

      return response.hits;
    })
    .then(image => {
      gallery.innerHTML = '';
      hideLoadingMessage(load);

      gallery.innerHTML = createMarkup(image);
      search = '';
      galleryImage.refresh();
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadingMessage(load);
    });
}
