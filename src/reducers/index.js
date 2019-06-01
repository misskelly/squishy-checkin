import { combineReducers } from 'redux';
import errorMessage from './errorMessage';
import { toggleIsLoading } from './toggleIsLoading';
import { cat } from './cat';
import joke from './joke';


export const rootReducer = combineReducers({
  toggleIsLoading,
  errorMessage,
  cat,
  joke,
});

export default rootReducer;
