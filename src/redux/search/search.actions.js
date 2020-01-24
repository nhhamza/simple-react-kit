import SearchActionTypes from './search.types';

export const fetchSearchResultsStart = text => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_START,
  payload: text,
});

export const fetchSearchResultsSuccess = data => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
  payload: data,
});

export const fetchSearchResultsFailure = error => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
  payload: error,
});

export const fetchSearchResultsFinished = () => ({
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_FINISHED,
});
