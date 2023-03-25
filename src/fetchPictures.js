// HTTP-запити
// Для бекенду використовуй публічний API сервісу Pixabay.

import axios from 'axios';

export async function fetchPictures(searchData, page) {
  const queryParams = {
    key: '14186274-c46cf2473e62b834269b72b2c',
    q: searchData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  };

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
