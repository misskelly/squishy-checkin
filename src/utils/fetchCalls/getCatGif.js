/* eslint-disable import/prefer-default-export */
import { apiKey } from '../apiKey'

export const getCatGif = async () => {
  const apiKey = '98eb6a0b-604a-4f6e-8f18-267c3a74c3f7';
  const url = 'https://api.thecatapi.com/v1/images/search?limit=1&size=full&mime_types=gif';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      key: 'ABC123',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to post user data');
  }
  return response.json();
};
