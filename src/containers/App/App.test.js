import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { getHelpers } from '../../thunks/getHelpers';

jest.mock('../../thunks/getHelpers');

describe('App', () => {
  let wrapper;
  let mockGetHelpers;

  beforeEach(() => {
    mockGetHelpers = jest.fn();
    wrapper = shallow(<App getHelpers={mockGetHelpers} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn();
  it('should call dispatch with getHelpers', () => {
    const actionToDispatch = getHelpers();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getHelpers();
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
