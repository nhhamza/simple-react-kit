import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';
import FileUploader from './FileUploader';

describe('<FileUploader />', () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    fileUploader: {
      files: ['filaName'],
      error: null,
    },
  });

  const MOCK_PROPS = {
    handleChange: jest.fn(),
    handleSave: jest.fn(),
  };

  const spyStoreDispatch = jest.spyOn(store, 'dispatch');
  const component = mount(
    <Provider store={store}>
      <FileUploader {...MOCK_PROPS} />
    </Provider>,
  );

  it('renders', () => {
    expect(component.exists()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    component
      .find(Button)
      .props()
      .onClick();

    expect(spyStoreDispatch).toHaveBeenCalledWith({
      type: 'ADD_FILES',
      payload: [],
    });
  });

  // todo:@Hamza add test for funcionality when is finished.
});
