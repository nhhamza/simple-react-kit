import React from 'react';
import { mount } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {
  const wrapper = mount(<Home />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
