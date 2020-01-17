import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import HelloWorld from './HelloWorld.component';

describe('<App />', () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    subeBaja: {
      number: 0,
      isLoading: false,
      error: null,
    },
  });

  const spyStoreDispatch = jest.spyOn(store, 'dispatch');

  const wrapper = mount(
    <Provider store={store}>
      <HelloWorld />
    </Provider>,
  );

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should dispatch subeStart when user clicks on +1 button', () => {
    wrapper.find('.button__sube').simulate('click');

    expect(spyStoreDispatch).toHaveBeenCalledWith({ type: 'SUBE_START' });
  });

  it('should dispatch subeStart when user clicks on -1 button', () => {
    wrapper.find('.button__baja').simulate('click');

    expect(spyStoreDispatch).toHaveBeenCalledWith({ type: 'BAJA_START' });
  });
});
