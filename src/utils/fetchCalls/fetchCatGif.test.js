import { fetchCatGif } from './fetchCatGif';
import { apiKey } from '../apiKey';

describe('fetchCatGif', () => {
  const mockUrl = 'https://api.thecatapi.com/v1/images/search?limit=1&size=full&mime_types=gif';
  const mockHeader = { headers: { apiKey: 'ABC123' } };
  const mockResult = [{
    id: '4hp',
    url: 'https://cdn2.thecatapi.com/images/4hp.gif',
    width: 240,
  }];
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResult),
  }));

  it('should fetch a joke object using the correct url', () => {
    fetchCatGif(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockHeader);
  });

  it('should return a joke object if fetch status is ok', async () => {
    const result = await (fetchCatGif(mockUrl, mockHeader));
    await expect(result).toEqual(mockResult);
  });

  it('should return an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: false }));
    await expect(fetchCatGif(mockUrl)).rejects.toEqual(Error('Failed to fetch'));
  });
});
