

export const fetchAnything = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
  });
  if (!response.ok) {
    throw Error('Fetch was unsuccessful',response.statusText)
  }
  return response.json();
}