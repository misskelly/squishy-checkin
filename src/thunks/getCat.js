import { isLoading, hasErrored, setCat } from '../actions';
import fetchCatGif from '../utils/fetchCalls/fetchCatGif';

export const getCat = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetchCatGif();
      dispatch(setCat(response));
      dispatch(isLoading(false));
    } catch(error) {
      dispatch(hasErrored('Cats do not like fetch either.'));
      dispatch(isLoading(false));
    }
  };
};

// export default getCat;
