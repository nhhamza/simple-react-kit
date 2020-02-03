import React from 'react';
import { mount } from 'enzyme';

import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from './dialog.jsx';

describe('Dialog component', () => {
  const MOCK_PROPS = {
    open: false,
    handleClose: jest.fn(),
    title: 'Title test',
    content: 'Content test',
    textButtonOk: 'Accept',
    textButtonCancel: 'Cancel',
  };

  const wrapper = mount(<Dialog {...MOCK_PROPS} />);

  it('should render dialog component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render dialog with title when isCategory is true', () => {
    const MOCK_PROPS_TRUE = {
      open: true,
      handleClose: jest.fn(),
      title: 'Title test',
      content: 'Content test',
      textButtonOk: 'Accept',
    };

    const newWrapper = mount(<Dialog {...MOCK_PROPS_TRUE} />);
    expect(
      newWrapper
        .find(DialogTitle)
        .first()
        .text(),
    ).toEqual(MOCK_PROPS.title);
  });

  it('should render dialog without cancel button', () => {
    const MOCK_PROPS_BUTTON = {
      open: true,
      handleClose: jest.fn(),
      title: 'Title test',
      content: 'Content test',
      textButtonCancel: 'Cancel',
    };

    const newWrapper = mount(<Dialog {...MOCK_PROPS_BUTTON} />);
    expect(
      newWrapper
        .find(DialogActions)
        .find(Button)
        .first('ButtonKO')
        .text(),
    ).toEqual(MOCK_PROPS_BUTTON.textButtonCancel);
  });
});
