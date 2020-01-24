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

  it('should dispatch fetch result start when on Change Handler function receives more than 3 characters', () => {
    wrapper
      .find(Search)
      .props()
      .onChangeHandler('vale');
    expect(spyStoreDispatch).toHaveBeenCalledWith({
      type: 'FETCH_SEARCH_RESULTS_START',
      payload: 'vale',
    });
  });

  it('should not dispatch fetch result start when on Change Handler function receives more than 3 characters', () => {
    wrapper
      .find(Search)
      .props()
      .onChangeHandler('va');

    spyStoreDispatch.mockRestore();

    expect(spyStoreDispatch).not.toHaveBeenCalled();
  });

  it('should dispatch fetch result start when on change select handler function receives more than 3 characters', () => {
    const MOCK_ON_CHANGE_HANDLER_RESPONSE = { title: 'val', id: '1' };
    wrapper
      .find(Search)
      .props()
      .onChangeSelectHandler(MOCK_ON_CHANGE_HANDLER_RESPONSE);
    expect(spyStoreDispatch).toHaveBeenCalledWith({
      type: 'FETCH_SEARCH_RESULTS_START',
      payload: MOCK_ON_CHANGE_HANDLER_RESPONSE.title,
    });
  });

  it('should not dispatch fetch result start when on change select handler function receives more than 3 characters', () => {
    const MOCK_ON_CHANGE_HANDLER_RESPONSE = { title: 'va', id: '1' };

    wrapper
      .find(Search)
      .props()
      .onChangeSelectHandler(MOCK_ON_CHANGE_HANDLER_RESPONSE);

    spyStoreDispatch.mockRestore();

    expect(spyStoreDispatch).not.toHaveBeenCalled();
  });
});
