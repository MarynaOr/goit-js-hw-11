import fetchImg from './js/pixabay-api';
import createMarkup from './js/render-functions';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form =document.querySelector('.form');
const btn =  document.querySelector('.btn');



fetch('url')
.then((data) => {
    if(data.hits.length === 0){
       iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        }); 
    }
    return data.hits;
})
.catch(error => {
    console.log('ERROR:', error);
    return Promise.reject(error);
  });





























