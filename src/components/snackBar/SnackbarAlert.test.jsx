import React from 'react';

import { shallow } from 'enzyme';

import MuiAlert from '@material-ui/lab/Alert';
import SnackbarAlert from './SnackbarAlert.jsx';

describe('SnackbarAlert component', () => {
  const wrapper = shallow(<SnackbarAlert />);
  it('should render', () => {
    expect(wrapper.exists()).toMatchSnapshot();
  });

  it('should render span', () => {
    const EXPECTED_MESSAGE = 'hola';
    const MOCK_PROPS = {
      message: 'hola',
      open: true,
    };
    const newWrapper = shallow(<SnackbarAlert {...MOCK_PROPS} />);
    expect(
      newWrapper
        .find(MuiAlert)
        .dive()
        .find('span')
        .text(),
    ).toEqual(EXPECTED_MESSAGE);
  });
});
