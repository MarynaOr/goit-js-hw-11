const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47645708-0e2c2a3797788683efa376261';

export function fetchImg(search) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  });
}
