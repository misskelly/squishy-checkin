import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
