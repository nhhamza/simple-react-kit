import React from 'react';
import { shallow } from 'enzyme';

import Dropzone from './Dropzone';

describe('<Dropzone />', () => {
  const wrapper = shallow(<Dropzone />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
