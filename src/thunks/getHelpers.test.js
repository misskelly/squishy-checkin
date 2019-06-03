import { getHelpers } from './getHelpers';
import { fetchCatGif } from '../utils/fetchCalls/fetchCatGif';
import fetchDadJoke from '../utils/fetchCalls/fetchDadJoke';
import {
  isLoading, hasErrored, setCat, setJoke
} from '../actions';

jest.mock('../utils/fetchCalls/fetchCatGif.js');
jest.mock('../utils/fetchCalls/fetchDadJoke.js');

describe('getHelpers', () => {
  let mockDispatch;
  let thunk;
  beforeEach(() => {
    thunk = getHelpers();
    mockDispatch = jest.fn();
  });

  it('should call dispatch with isLoading(true)', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call dispatch with fetchCatGif(cat)', async () => {
    await thunk(mockDispatch);
    const cat = await fetchCatGif();

    expect(mockDispatch).toHaveBeenCalledWith(setCat(cat));
  });
  it('should call dispatch with setJoke(joke)', async () => {
    await thunk(mockDispatch);
    const joke = await fetchDadJoke();

    expect(mockDispatch).toHaveBeenCalledWith(setJoke(joke));
  });

  it('should call dispatch with isLoading(false)', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch hasErrored if something goes wrong', async () => {
    thunk = jest.fn().mockImplementation(() => Promise.resolve());
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Cats do not like fetch either.'));
  });
});
