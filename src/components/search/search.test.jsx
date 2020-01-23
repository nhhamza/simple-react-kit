import React from 'react';
import { shallow } from 'enzyme';

import { AutoComplete } from 'antd';
import Search from './search.component';

describe('Search component', () => {
  const MOCK_PROPS = {
    onSearchHandler: jest.fn(),
    predictiveResults: [],
    isLoading: false,
  };

  const wrapper = shallow(<Search {...MOCK_PROPS} />);

  it('should render search component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show spinner when isLoading is true', () => {
    const MOCK_PROPS = {
      onSearchHandler: jest.fn(),
      predictiveResults: [],
      isLoading: true,
    };

    const newWrapper = shallow(<Search {...MOCK_PROPS} />);
    expect(newWrapper.find('.search__spinner').exists()).toBeTruthy();
  });

  it('should set data source to empty array when isLoading is true', () => {
    const EXPECTED_RESULT = [];

    const MOCK_PROPS = {
      onSearchHandler: jest.fn(),
      predictiveResults: ['Valencia', 'Alicante'],
      isLoading: true,
    };

    const newWrapper = shallow(<Search {...MOCK_PROPS} />);

    expect(newWrapper.find(AutoComplete).props().dataSource).toEqual(
      EXPECTED_RESULT,
    );
  });
});
