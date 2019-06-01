import joke from '../joke';
import { setJoke } from '../../actions';


describe('joke', () => {
  let initialState;
  let mockDirtyJoke;
  let mockCleanJoke;
  beforeEach(() => {
    initialState = '';
    mockDirtyJoke = {
      id: 'R7hFtWv49h',
      joke: 'I ate a clock yesterday. It was so time consuming.',
    };
    mockCleanJoke = 'I ate a clock yesterday. It was so time consuming.';
  });

  it('should return the initial state', () => {
    const expected = '';
    const result = joke(initialState, '');
    expect(result).toEqual(expected);
  });

  it('should set the state with only the joke from the object passed', () => {
    const expected = mockCleanJoke;
    const result = joke(initialState, setJoke(mockDirtyJoke));
    expect(result).toEqual(expected);
  });
});
