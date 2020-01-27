import React from 'react';
import { shallow } from 'enzyme';

import Header from './header.jsx';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
