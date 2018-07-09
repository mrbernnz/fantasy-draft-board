import React from 'react';
import { shallow, mount } from 'enzyme';

import { Players } from './';

describe('<Players />', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Players />);
    const header = <h2>Players</h2>;
    expect(wrapper).toContainReact(header);
  });

  it('should mount in full DOM', function() {
    const wrapper = mount(<Players />);
    expect(wrapper.find('h2').length).toBe(1);
  });
});
