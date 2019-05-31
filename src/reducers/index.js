import { combineReducers } from 'redux';
import hasErrored from './hasErrored';
import isLoading from './isLoading';
import cat from './cat';


const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  cat
});

export default rootReducer;