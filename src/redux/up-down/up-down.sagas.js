import { takeLatest, put, all, call } from 'redux-saga/effects';

//  import api from '../../api/api';

import UpDownActionTypes from './up-down.types';

import {
  downSuccess,
  downFailure,
  downFinished,
  upSuccess,
  upFailure,
  upFinished,
} from './up-down.actions';

export function* up() {
  try {
    //  const { data } = yield call(api.getStart);
    yield put(upSuccess());
  } catch (error) {
    yield put(upFailure(error));
  }
  yield put(upFinished());
}

export function* down() {
  try {
    yield put(downSuccess());
  } catch (error) {
    yield put(downFailure(error));
  }
  yield put(downFinished());
}

export function* onGetUpStart() {
  yield takeLatest(UpDownActionTypes.UP_START, up);
}

export function* onGetDownStart() {
  yield takeLatest(UpDownActionTypes.DOWN_START, down);
}
export function* upDownSagas() {
  yield all([call(onGetUpStart), call(onGetDownStart)]);
}
