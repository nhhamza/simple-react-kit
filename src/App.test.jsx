import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';
import HelloWorld from './components/hello-world/hello-world.component';

describe('<App />', () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    subeBaja: {
      number: 0,
      isLoading: false,
      error: null,
    },
  });

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains HelloWorld component', () => {
    expect(wrapper.find(HelloWorld).exists()).toBeTruthy();
  });
});
