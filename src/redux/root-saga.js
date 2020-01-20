import { all, call } from 'redux-saga/effects';
import { upDownSagas } from './up-down/up-down.sagas';

export default function* rootSaga() {
  yield all([call(upDownSagas)]);
}
