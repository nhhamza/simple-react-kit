import React from 'react';
import { mount } from 'enzyme';

import Footer from './Footer.jsx';

describe('<Footer />', () => {
  const wrapper = mount(<Footer />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
