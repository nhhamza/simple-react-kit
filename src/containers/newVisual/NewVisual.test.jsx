import React from 'react';

import { shallow } from 'enzyme';

import NewVisual from './NewVisual.jsx';

describe('NewVisual component', () => {
  const wrapper = shallow(<NewVisual />);

  it('should render', () => {
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
