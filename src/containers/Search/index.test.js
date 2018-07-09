import React from 'react';
import { mount, shallow, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'

import { Search } from './index';

// configure({adapter: new Adapter()})

describe('<Search/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should render form', () => {
    expect(wrapper.contains(<form />)).toBe(true);
  });

  it('should mount in full DOM', () => {
    expect(mount(<Search />).find('form').length).toBe(1);
  });
});
