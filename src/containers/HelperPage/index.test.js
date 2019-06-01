import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, matchDispatchToProps, HelperPage } from './index';

describe('HelperPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HelperPage
        match={{path: '/cats'}} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});