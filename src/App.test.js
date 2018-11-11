import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import { PlayersContainer } from './components/containers/Players';

describe('<App />', () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    // expect(wrapper).toContainReact(<PlayersContainer />);
  });
});
