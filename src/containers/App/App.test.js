import React from 'react';
import { shallow }from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getHelpers } from '../../thunks/getHelpers';

jest.mock('../../thunks/getHelpers')

describe('App', () => {
  let wrapper;
  let mockGetHelpers;

  beforeEach(() => {
    mockGetHelpers = jest.fn();
    wrapper = shallow(<App getHelpers={mockGetHelpers}/>); 
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});