import React from 'react';
import { shallow } from 'enzyme';

import Player from './player';

describe('<Player />', () => {
  it('should render without err', () => {
    const wrapper = shallow(<Player name="Jon Doe" pos="QB" team="NYJ" />);
    expect(wrapper.find('.name')).toHaveText('Jon Doe');
    expect(wrapper.find('.position')).toHaveText('QB');
    expect(wrapper.find('.team')).toHaveText('NYJ');
  });
});
