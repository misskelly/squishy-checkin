import React from 'react';
import { shallow } from 'enzyme';
import NotOkPage from './index'

describe('NotOkPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotOkPage />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});