import { combineReducers } from 'redux';
import hasErrored from './hasErrored';
import isLoading from './isLoading';


const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  // setCat
});

export default rootReducer;