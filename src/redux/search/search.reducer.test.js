import SearchActionTypes from './search.types';

import searchReducer from './search.reducer';

const INITIAL_STATE = {
  predictiveResults: [],
  error: null,
  isLoading: false,
};

describe('searchReducer', () => {
  it('should return initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should put isLoading to true on search results start', () => {
    expect(
      searchReducer(INITIAL_STATE, {
        type: SearchActionTypes.FETCH_SEARCH_RESULTS_START,
      }).isLoading,
    ).toBeTruthy();
  });

  it('should add predictive results to state on search results success', () => {
    const EXPECTED_RESULTS = ['Valencia'];
    expect(
      searchReducer(INITIAL_STATE, {
        type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
        payload: EXPECTED_RESULTS,
      }).predictiveResults,
    ).toEqual(EXPECTED_RESULTS);
  });

  it('should set errorMessage to payload on search results failure', () => {
    const MOCK_ERROR = {
      message: 'error',
      code: 404,
    };
    expect(
      searchReducer(INITIAL_STATE, {
        type: SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
        payload: MOCK_ERROR,
      }).error,
    ).toBe(MOCK_ERROR);
  });

  it('should put isLoading to false on search results finished', () => {
    expect(
      searchReducer(INITIAL_STATE, {
        type: SearchActionTypes.FETCH_SEARCH_RESULTS_FINISHED,
      }).isLoading,
    ).toBeFalsy();
  });
});
