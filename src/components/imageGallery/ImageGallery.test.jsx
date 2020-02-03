import React from 'react';

import { shallow } from 'enzyme';

import Gallery from './ImageGallery.jsx';

describe('Image Gallery component', () => {
  const wrapper = shallow(<Gallery />);
  it('should render', () => {
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
