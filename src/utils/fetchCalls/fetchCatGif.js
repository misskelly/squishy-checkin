/* eslint-disable import/prefer-default-export */
import { apiKey } from '../apiKey';

export const fetchCatGif = async () => {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=1&size=full&mime_types=gif';
  const response = await fetch(url, {
    headers: {
      apiKey: 'ABC123',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};



export default fetchCatGif;