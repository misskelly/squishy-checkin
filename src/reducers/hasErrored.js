
const hasErrored = (state = '', action) => {
  switch (action.type) {
  case 'HAS_ERRORED':
    return action.message;
  default:
    return state;
  }
};

export default hasErrored;
