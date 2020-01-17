import { takeLatest, put, call, all } from 'redux-saga/effects';
import SubeBajaActionTypes from './sube-baja.types';

import {
  bajaSuccess,
  bajaFailure,
  bajaFinished,
  subeSuccess,
  subeFailure,
  subeFinished,
} from './sube-baja.actions';

import {
  baja,
  sube,
  onGetSubeStart,
  onGetBajaStart,
  subeBajaSagas,
} from './sube-baja.sagas';

describe('sube saga', () => {
  const generator = sube();
  it('should call subeSuccess', () => {
    expect(generator.next().value).toEqual(put(subeSuccess()));
  });

  it('should call subeFinished', () => {
    expect(generator.next().value).toEqual(put(subeFinished()));
  });

  it('should call subeFailure when error', () => {
    const EXPECTED_ERROR = 'error';
    const newGenerator = sube();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(subeFailure(EXPECTED_ERROR)),
    );
  });

  it('should trigger on SUBE_START', () => {
    const generator = onGetSubeStart();
    expect(generator.next().value).toEqual(
      takeLatest(SubeBajaActionTypes.SUBE_START, sube),
    );
  });
});

describe('baja saga', () => {
  const generator = baja();
  it('should call bajaSuccess', () => {
    expect(generator.next().value).toEqual(put(bajaSuccess()));
  });

  it('should call bajaFinished', () => {
    expect(generator.next().value).toEqual(put(bajaFinished()));
  });

  it('should call bajaFailure when error', () => {
    const EXPECTED_ERROR = 'error';
    const newGenerator = baja();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(bajaFailure(EXPECTED_ERROR)),
    );
  });

  it('should trigger on BAJA_START', () => {
    const generator = onGetBajaStart();
    expect(generator.next().value).toEqual(
      takeLatest(SubeBajaActionTypes.BAJA_START, baja),
    );
  });
});

describe('subeBajaSagas', () => {
  it('calls `all()` with the correct functions', () => {
    const generator = subeBajaSagas();
    expect(generator.next().value).toEqual(
      all([call(onGetSubeStart), call(onGetBajaStart)]),
    );
  });
});
