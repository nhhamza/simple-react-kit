import React from 'react';
import { shallow } from 'enzyme';

import Search from './search.component';

describe('Search component', () => {
  const wrapper = shallow(<Search />);
  it('should render search component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
