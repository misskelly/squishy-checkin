const cat = (state = '', action) => {
  switch(action.type) {
  case 'SET_CAT':
    return action.cat;
  default:
    return state;
  }
};

export default cat;