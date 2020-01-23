import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Search from '../../components/search/search.component';

import Home from './Home';

describe('Home component', () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    search: {
      predictiveResults: [],
      isLoading: false,
      error: null,
    },
  });

  const spyStoreDispatch = jest.spyOn(store, 'dispatch');

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should dispatch fetch result start when on search function receives more than 3 characters', () => {
    wrapper
      .find(Search)
      .props()
      .onSearchHandler('vale');
    expect(spyStoreDispatch).toHaveBeenCalledWith({
      type: 'FETCH_SEARCH_RESULTS_START',
      payload: 'vale',
    });
  });

  it('should not dispatch fetch result start when on search function receives more than 3 characters', () => {
    wrapper
      .find(Search)
      .props()
      .onSearchHandler('va');

    spyStoreDispatch.mockRestore();

    expect(spyStoreDispatch).not.toHaveBeenCalled();
  });
});
