import { takeLatest, put, all, call } from 'redux-saga/effects';

//  import api from '../../api/api';

import SubeBajaActionTypes from './sube-baja.types';

import {
  bajaFailure,
  bajaFinished,
  bajaSuccess,
  subeFailure,
  subeFinished,
  subeSuccess,
} from './sube-baja.actions';

export function* sube() {
  try {
    //  const { data } = yield call(api.getStart);
    yield put(subeSuccess());
  } catch (error) {
    yield put(subeFailure(error));
  }
  yield put(subeFinished());
}

export function* baja() {
  try {
    yield put(bajaSuccess());
  } catch (error) {
    yield put(bajaFailure(error));
  }
  yield put(bajaFinished());
}

export function* onGetSubeStart() {
  yield takeLatest(SubeBajaActionTypes.SUBE_START, sube);
}

export function* onGetBajaStart() {
  yield takeLatest(SubeBajaActionTypes.BAJA_START, baja);
}
export function* subeBajaSagas() {
  yield all([call(onGetSubeStart), call(onGetBajaStart)]);
}
