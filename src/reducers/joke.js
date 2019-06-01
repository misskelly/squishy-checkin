const joke = (state = '', action) => {
  switch (action.type) {
    case 'SET_JOKE':
      return action.joke.joke;
    default:
      return state;
  }
};

export default joke;
