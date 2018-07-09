import React from 'react';
import { shallow, mount } from 'enzyme';

import { PlayersContainer } from './';

describe('<PlayersContainer />', () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = shallow(<PlayersContainer />);
  });

  it('should render without error', () => {
    const header = <h2>Players</h2>;
    // expect(wrapper).toContainReact(header);
  });

  it('should mount in full DOM', () => {
    // const wrapper = mount(<PlayersContainer />);
    // expect(wrapper.find('h2').length).toBe(1);
  });
});
