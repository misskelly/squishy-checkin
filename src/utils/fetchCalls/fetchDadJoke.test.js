/* eslint-disable max-lines-per-function */
import fetchDadJoke from './fetchDadJoke';

describe('fetchDadJoke', () => {
  const mockUrl = 'https://icanhazdadjoke.com/';
  const mockHeader = {
    headers: {
      Accept: 'application/json',
    },
  };
  const mockResult = {
    id: 'F6wPR71Dtzd',
    joke: 'I’m reading a book on the history of glue – can’t put it down.',
    status: 200,
  };
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResult),
  }));

  it('should fetch a joke object using the correct url', () => {
    fetchDadJoke(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockHeader);
  });

  it('should return a joke object if fetch status is ok', async () => {
    const result = await (fetchDadJoke(mockUrl, mockHeader));
    await expect(result).toEqual(mockResult);
  });

  it('should return an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: false }));
    await expect(fetchDadJoke(mockUrl)).rejects.toEqual(Error('Fetch was unsuccessful'));
  });
});
