import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('<About />', () => {
  const wrapper = shallow(<About />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
