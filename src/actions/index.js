export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message,
});

export const setCat = cat => ({
  type: 'SET_CAT',
  cat
});

export const setJoke = joke => ({
  type: 'SET_JOKE',
  joke
});

