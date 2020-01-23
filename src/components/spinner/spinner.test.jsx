import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './spinner.component';

describe('Spinner component', () => {
  const wrapper = shallow(<Spinner />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
