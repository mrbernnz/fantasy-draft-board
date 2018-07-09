import React from 'react';
import { mount, shallow, render } from 'enzyme';

import { Search } from './index';

describe('<Search/>', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Search />);
    const searchInput = <input id="search" name="term" type="search" />;
    expect(wrapper).toContainReact(searchInput);
    expect(wrapper.find('#search')).toHaveTagName('input');
  });

  it('should mount in full DOM', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Search />).text()).toEqual('Search Players');
  });
});
