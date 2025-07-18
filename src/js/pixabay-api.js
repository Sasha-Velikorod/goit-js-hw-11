export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY_API = '51376932-00c07b39d8c117a87ed229cff';

  const params = new URLSearchParams({
    key: KEY_API,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
