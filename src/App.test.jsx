import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('<App />', () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    upDown: {
      number: 0,
      isLoading: false,
      error: null,
    },
    search: {
      predictiveResults: [],
      isLoading: false,
      error: null,
    },
  });

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
