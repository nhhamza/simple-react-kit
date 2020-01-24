import React from 'react';
import { mount } from 'enzyme';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Search from './search.component';

describe('Search component', () => {
  const MOCK_PROPS = {
    onSearchHandler: jest.fn(),
    predictiveResults: [{ title: 'valencia', id: '1' }],
    isLoading: false,
    onChangeSelectHandler: jest.fn(),
    onChangeHandler: jest.fn(),
  };

  const wrapper = mount(<Search {...MOCK_PROPS} />);

  it('should render search component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should call onChangeSelectHandler when user writes in textfield', () => {
    const MOCK_OPTIONS = [{ title: 'valencia', id: '1' }];
    wrapper.find(Autocomplete).props().options = MOCK_OPTIONS;
    wrapper
      .find(Autocomplete)
      .props()
      .onChange('val');
    expect(MOCK_PROPS.onChangeSelectHandler).toHaveBeenCalled();
  });

  it('should call onChangeHandler when user writes in textfield', () => {
    const MOCK_EVENT_VALUE = { target: { value: 'val' } };
    wrapper
      .find(TextField)
      .props()
      .onChange(MOCK_EVENT_VALUE);
    expect(MOCK_PROPS.onChangeHandler).toHaveBeenCalledWith(
      MOCK_EVENT_VALUE.target.value,
    );
  });

  it('should get title from predictiveResults in getOptionLabel', () => {
    const EXPECTED_RESPONSE = 'valencia';
    const EXPECTED_OPTION_LABEL = { title: 'valencia', id: '1' };
    expect(
      wrapper
        .find(Autocomplete)
        .props()
        .getOptionLabel(EXPECTED_OPTION_LABEL),
    ).toEqual(EXPECTED_RESPONSE);
  });

  it('should put empty array when in options when isLoading is true', () => {
    const MOCK_PROPS = {
      onSearchHandler: jest.fn(),
      predictiveResults: { title: 'valencia', id: '1' },
      isLoading: true,
      onChangeSelectHandler: jest.fn(),
      onChangeHandler: jest.fn(),
    };

    const newWrapper = mount(<Search {...MOCK_PROPS} />);

    expect(newWrapper.find(Autocomplete).props().options).toEqual([]);
  });
});
