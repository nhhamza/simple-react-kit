import SearchActionTypes from './search.types';

const INITIAL_STATE = {
  predictiveResults: [],
  error: null,
  isLoading: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH_RESULTS_START:
      return { ...state, isLoading: true };
    case SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
      return { ...state, predictiveResults: action.payload };
    case SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE:
      return { ...state, error: action.payload };
    case SearchActionTypes.FETCH_SEARCH_RESULTS_FINISHED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default searchReducer;
