import { all, call } from 'redux-saga/effects';
import { upDownSagas } from './up-down/up-down.sagas';
import { searchResultsSagas } from './search/search.sagas';

export default function* rootSaga() {
  yield all([call(upDownSagas), call(searchResultsSagas)]);
}
