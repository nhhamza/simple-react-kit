import React from 'react';
import { shallow } from 'enzyme';

import ListCategories from './ListCategories.jsx';

describe('<ListCategories />', () => {
  const wrapper = shallow(<ListCategories />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
