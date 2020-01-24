import { put, all, call, debounce } from 'redux-saga/effects';

import SearchActionTypes from './search.types';

import api from '../../api/api';

import {
  onFetchSearchResultsStart,
  fetchSearchResults,
  searchResultsSagas,
} from './search.sagas';
import {
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  fetchSearchResultsFinished,
} from './search.actions';

describe('Search sagas', () => {
  const MOCK_PAYLOAD = 'valencia';
  const generator = fetchSearchResults({ type: '', payload: MOCK_PAYLOAD });

  it('should call api', () => {
    api.getSearchResults = jest.fn();
    expect(generator.next().value).toEqual(
      call(api.getSearchResults, MOCK_PAYLOAD),
    );
  });

  it('should call fetchSearchResultsSuccess', () => {
    const response = { data: ['Valencia'] };
    expect(generator.next(response).value).toEqual(
      put(fetchSearchResultsSuccess(response.data)),
    );
  });

  it('should throw error when api call fails', () => {
    expect(generator.throw('error').value).toEqual(
      put(fetchSearchResultsFailure('error')),
    );
  });

  it('should put fetch terminal base url finished', () => {
    expect(generator.next().value).toEqual(put(fetchSearchResultsFinished()));
  });

  it('should trigger on FETCH_SEARCH_RESULTS_START', () => {
    const generator = onFetchSearchResultsStart();
    expect(generator.next().value).toEqual(
      debounce(
        300,
        SearchActionTypes.FETCH_SEARCH_RESULTS_START,
        fetchSearchResults,
      ),
    );
  });

  describe('searchResultsSagas', () => {
    it('calls `all()` with the correct functions', () => {
      const generator = searchResultsSagas();
      expect(generator.next().value).toEqual(
        all([call(onFetchSearchResultsStart)]),
      );
    });
  });
});
