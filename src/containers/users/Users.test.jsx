import React from 'react';
import { shallow } from 'enzyme';

import Users from './Users';

describe('<Users />', () => {
  const wrapper = shallow(<Users />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
