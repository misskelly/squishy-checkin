import toggleIsLoading from '../toggleIsLoading';
import { isLoading } from '../../actions';

describe('toggleIsLoading', () => {
  let initialState;
  beforeEach(() => {
    initialState = false;
  });

  it('should return the initial state', () => {
    const expected = initialState;
    const result  = toggleIsLoading(initialState, isLoading(false));
    expect(result).toEqual(expected);
  });
  
  it('should update state when called', () => {
    const expected = true;
    const result = toggleIsLoading(initialState, isLoading(true));
    expect(result).toEqual(expected);
  });
});