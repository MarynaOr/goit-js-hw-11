export default fetchImg


const API_KEY = ' 47645708-0e2c2a3797788683efa376261'
const URL = 'https://pixabay.com/api'

function fetchImg (query) {

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
.then((response) => {
    if(!response.ok){
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });


    }
    return response.json();

})


}




































