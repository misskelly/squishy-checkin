export const cat = (state = '', action) => {
  switch (action.type) {
    case 'SET_CAT':
      return action.cat[0].url;
    default:
      return state;
  }
};

export default cat;
