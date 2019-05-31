import { combineReducers } from 'redux';
import hasErrored from './hasErrored';
import isLoading from './isLoading';
import cat from './cat';
import joke from './joke';


const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  cat,
  joke
});

export default rootReducer;