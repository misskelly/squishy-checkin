import errorMessage from '../errorMessage';
import { hasErrored } from '../../actions';

describe('errorMessage', () => {
  let initialState;
  let mockMessage;

  beforeEach(() => {
    initialState = '';
    mockMessage = 'Something is broken';
  });

  it('should return the initial state', () => {
    const expected = '';
    const result = errorMessage(initialState, '');
    expect(result).toEqual(expected);
  });

  it('should update the state with an error message if there is a problem', () => {
    const expected = 'Something is broken';
    const result = errorMessage(initialState, hasErrored(mockMessage));
    expect(result).toEqual(expected);
  });
});
