import React from 'react';
import { shallow } from 'enzyme';
import NotOk from './index';

describe('NotOkPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotOk />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
