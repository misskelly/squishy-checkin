import * as actions from '.';


describe('isLoading', () => {
  it('should return a type of IS_LOADING with a boolean', () => {
    const result = actions.isLoading(true);
    const expected = {
      type: 'IS_LOADING',
      isLoading: true,
    };

    expect(result).toEqual(expected);
  });
});

describe('hasErrored', () => {
  it('should return a type of HAS_ERRORED with a message', () => {
    const message = 'Something went wrong';
    const result = actions.hasErrored(message);
    const expected = {
      type: 'HAS_ERRORED',
      message: 'Something went wrong',
    };
    expect(result).toEqual(expected);
  });
});

describe('setCat', () => {
  it('should return a type of SET_CAT with a cat', () => {
    const cat = 'https://cdn2.thecatapi.com/images/8u5.gif';
    const result = actions.setCat(cat);
    const expected = {
      type: 'SET_CAT',
      cat: 'https://cdn2.thecatapi.com/images/8u5.gif',
    };
    expect(result).toEqual(expected);
  });
});

describe('setJoke', () => {
  it('should return a type of SET_JOKE with a Joke', () => {
    const joke = 'I finally bought the limited edition Thesaurus that Ive always wanted. When I opened it, all the pages were blank. I have no words to describe how angry I am.';
    const result = actions.setJoke(joke);
    const expected = {
      type: 'SET_JOKE',
      joke: 'I finally bought the limited edition Thesaurus that Ive always wanted. When I opened it, all the pages were blank. I have no words to describe how angry I am.',
    };
    expect(result).toEqual(expected);
  });
});
