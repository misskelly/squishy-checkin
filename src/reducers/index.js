import { combineReducers } from 'redux';
import hasErrored from './hasErrored';
import toggleIsLoading from './toggleIsLoading';
import cat from './cat';
import joke from './joke';


export const rootReducer = combineReducers({
  toggleIsLoading,
  hasErrored,
  cat,
  joke
});

export default rootReducer;