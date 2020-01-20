import { takeLatest, put, call, all } from 'redux-saga/effects';
import SubeBajaActionTypes from './up-down.types';

import {
  downSuccess,
  downFailure,
  downFinished,
  upSuccess,
  upFailure,
  upFinished,
} from './up-down.actions';

import {
  down,
  up,
  onGetUpStart,
  onGetDownStart,
  upDownSagas,
} from './up-down.sagas';

describe('up saga', () => {
  const generator = up();
  it('should call upSuccess', () => {
    expect(generator.next().value).toEqual(put(upSuccess()));
  });

  it('should call upFinished', () => {
    expect(generator.next().value).toEqual(put(upFinished()));
  });

  it('should call upFailure when error', () => {
    const EXPECTED_ERROR = 'error';
    const newGenerator = up();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(upFailure(EXPECTED_ERROR)),
    );
  });

  it('should trigger on UP_START', () => {
    const generator = onGetUpStart();
    expect(generator.next().value).toEqual(
      takeLatest(SubeBajaActionTypes.UP_START, up),
    );
  });
});

describe('down saga', () => {
  const generator = down();
  it('should call downSuccess', () => {
    expect(generator.next().value).toEqual(put(downSuccess()));
  });

  it('should call downFinished', () => {
    expect(generator.next().value).toEqual(put(downFinished()));
  });

  it('should call downFailure when error', () => {
    const EXPECTED_ERROR = 'error';
    const newGenerator = down();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(downFailure(EXPECTED_ERROR)),
    );
  });

  it('should trigger on DOWN_START', () => {
    const generator = onGetDownStart();
    expect(generator.next().value).toEqual(
      takeLatest(SubeBajaActionTypes.DOWN_START, down),
    );
  });
});

describe('upBajaSagas', () => {
  it('calls `all()` with the correct functions', () => {
    const generator = upDownSagas();
    expect(generator.next().value).toEqual(
      all([call(onGetUpStart), call(onGetDownStart)]),
    );
  });
});
