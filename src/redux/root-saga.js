import { all, call } from 'redux-saga/effects';
import { subeBajaSagas } from './sube-baja/sube-baja.sagas';
import { searchResultsSagas } from './search/search.sagas';

export default function* rootSaga() {
  yield all([call(subeBajaSagas), call(searchResultsSagas)]);
}
