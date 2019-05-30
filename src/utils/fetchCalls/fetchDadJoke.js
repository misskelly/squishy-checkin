/* eslint-disable import/prefer-default-export */

export const fetchDadJoke = async () => {
  const url = 'https://icanhazdadjoke.com/'
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw Error('Fetch was unsuccessful', response.statusText);
  }
  return response.json();
};
