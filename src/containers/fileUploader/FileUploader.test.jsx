import React from 'react';
import { mount } from 'enzyme';

import FileUploader from './FileUploader';

describe('<FileUploader />', () => {
  const wrapper = mount(<FileUploader />);

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
