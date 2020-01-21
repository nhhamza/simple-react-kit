import { put, all, call, debounce } from 'redux-saga/effects';
import SearchActionTypes from './search.types';
import api from '../../api/api.jsx';
import {
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  fetchSearchResultsFinished,
} from './search.actions';

export function* fetchSearchResults({ payload: text }) {
  try {
    const { data } = yield call(api.getSearchResults, text);
    yield put(fetchSearchResultsSuccess(data));
  } catch (error) {
    yield put(fetchSearchResultsFailure(error));
  }
  yield put(fetchSearchResultsFinished());
}

export function* onFetchSearchResultsStart() {
  yield debounce(
    100,
    SearchActionTypes.FETCH_SEARCH_RESULTS_START,
    fetchSearchResults,
  );
}

export function* searchResultsSagas() {
  yield all([call(onFetchSearchResultsStart)]);
}
