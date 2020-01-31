import React from 'react';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import FileUploader from './FileUploader';

describe('<FileUploader />', () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    fileUploader: {
      files: ['filaName'],
      error: null,
    },
  });

  const component = renderer.create(
    <Provider store={store}>
      <FileUploader />
    </Provider>,
  );

  it('renders', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
