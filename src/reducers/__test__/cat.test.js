import cat from '../cat';
import { setCat } from '../../actions';


describe('cat', () => {
  let initialState;
  let mockCleanCat;
  let mockDirtyCat;
  beforeEach(() => {
    mockDirtyCat = [{
      breeds: [],
      id: '4bp',
      url: 'https://cdn2.thecatapi.com/images/4bp.gif',
      width: 344,
      height: 184
    }];
    mockCleanCat = 'https://cdn2.thecatapi.com/images/4bp.gif';
    initialState = '';
  });

  it('should return the initial state', () => {
    const expected = '';
    const result  = cat(initialState, '');
    expect(result).toEqual(expected);
  });
  
  it('should set the state with only the url from the dirty cat it has been passed', () => {
    const expected = mockCleanCat; 
    const result = cat(initialState, setCat(mockDirtyCat));
    expect(result).toEqual(expected);
  });

});