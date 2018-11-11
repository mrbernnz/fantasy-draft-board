import React from 'react';
import { shallow, render } from 'enzyme';

import PlayersList from './players-list';
import playersData from '../../mocks/playerData';

describe('<PlayersList />', () => {
  it('should render zero items', () => {
    const wrapper = shallow(<PlayersList players={[]} />);
    expect(wrapper.find('li').length).toBe(0);
  });

  it('should render some items', () => {
    const wrapper = render(<PlayersList players={playersData} />);
    expect(wrapper.find('li').length).toBe(3);
  });
});
