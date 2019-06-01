import {
  isLoading, hasErrored, setCat, setJoke,
} from '../actions';
import { fetchCatGif } from '../utils/fetchCalls/fetchCatGif';
import fetchDadJoke from '../utils/fetchCalls/fetchDadJoke';

export const getHelpers = () => async (dispatch) => {
  try {
    dispatch(isLoading(true));
    const cat = await fetchCatGif();
    const joke = await fetchDadJoke();
    dispatch(setCat(cat));
    dispatch(setJoke(joke));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(hasErrored('Cats do not like fetch either.'));
    dispatch(isLoading(false));
  }
};

export default getHelpers;
