import SearchActionTypes from './search.types';

import {
  fetchSearchResultsStart,
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  fetchSearchResultsFinished,
} from './search.actions';

describe('search action', () => {
  describe('fetchSearchResultsStart action', () => {
    it('should be created', () => {
      const MOCK_PAYLOAD = 'valencia';
      const action = fetchSearchResultsStart(MOCK_PAYLOAD);
      expect(action.type).toEqual(SearchActionTypes.FETCH_SEARCH_RESULTS_START);
      expect(action.payload).toEqual(MOCK_PAYLOAD);
    });
  });

  describe('fetchSearchResultsSuccess action', () => {
    it('should be created', () => {
      const MOCK_PAYLOAD = ['valencia'];
      const action = fetchSearchResultsSuccess(MOCK_PAYLOAD);
      expect(action.type).toEqual(
        SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
      );
      expect(action.payload).toEqual(MOCK_PAYLOAD);
    });
  });

  describe('fetchSearchResultsFailure action', () => {
    it('should be created', () => {
      const MOCK_PAYLOAD = 'error';
      const action = fetchSearchResultsFailure(MOCK_PAYLOAD);
      expect(action.type).toEqual(
        SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
      );
      expect(action.payload).toEqual(MOCK_PAYLOAD);
    });
  });

  describe('fetchSearchResultsFinished action', () => {
    it('should be created', () => {
      const action = fetchSearchResultsFinished();
      expect(action.type).toEqual(
        SearchActionTypes.FETCH_SEARCH_RESULTS_FINISHED,
      );
    });
  });
});
