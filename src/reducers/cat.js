export const cat = (state = '', action) => {
  switch (action.type) {
  case 'SET_CAT':
    console.log('state', state, 'action', action)
    return action.cat[0].url;
  default:
    return state;
  }
};

export default cat;