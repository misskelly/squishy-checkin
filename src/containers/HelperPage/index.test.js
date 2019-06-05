import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, HelperPage } from '.';

describe('HelperPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HelperPage
        match={{ path: '/cats' }}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return a cat', () => {
    const mockState = {
      cat: 'https://cdn2.thecatapi.com/images/8u5.gif',
      otherStuff: false,
    };
    const expected = {
      cat: 'https://cdn2.thecatapi.com/images/8u5.gif',
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('should return a joke', () => {
    const mockState = {
      joke: 'I finally bought the limited edition Thesaurus that Ive always wanted. When I opened it, all the pages were blank. I have no words to describe how angry I am.',
      otherStuff: false,
    };
    const expected = {
      joke: 'I finally bought the limited edition Thesaurus that Ive always wanted. When I opened it, all the pages were blank. I have no words to describe how angry I am.',
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
