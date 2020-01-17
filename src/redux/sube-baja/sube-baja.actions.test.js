import SubeBajaActionTypes from './sube-baja.types';

import {
  bajaStart,
  bajaSuccess,
  bajaFailure,
  bajaFinished,
  subeStart,
  subeSuccess,
  subeFailure,
  subeFinished,
} from './sube-baja.actions';

describe('subeStart action', () => {
  it('should be created', () => {
    const action = subeStart();
    expect(action.type).toEqual(SubeBajaActionTypes.SUBE_START);
  });
});

describe('subeSuccess action', () => {
  it('should be created', () => {
    const action = subeSuccess();
    expect(action.type).toEqual(SubeBajaActionTypes.SUBE_SUCCESS);
  });
});

describe('subeFailure action', () => {
  it('should be created', () => {
    const MOCK_ERROR = 'error';
    const action = subeFailure(MOCK_ERROR);
    expect(action.type).toEqual(SubeBajaActionTypes.SUBE_FAILURE);
    expect(action.payload).toEqual(MOCK_ERROR);
  });
});

describe('subeFinished action', () => {
  it('should be created', () => {
    const action = subeFinished();
    expect(action.type).toEqual(SubeBajaActionTypes.SUBE_FINISHED);
  });
});

describe('bajaStart action', () => {
  it('should be created', () => {
    const action = bajaStart();
    expect(action.type).toEqual(SubeBajaActionTypes.BAJA_START);
  });
});

describe('bajaSuccess action', () => {
  it('should be created', () => {
    const action = bajaSuccess();
    expect(action.type).toEqual(SubeBajaActionTypes.BAJA_SUCCESS);
  });
});

describe('bajaFailure action', () => {
  it('should be created', () => {
    const MOCK_ERROR = 'error';
    const action = bajaFailure(MOCK_ERROR);
    expect(action.type).toEqual(SubeBajaActionTypes.BAJA_FAILURE);
    expect(action.payload).toEqual(MOCK_ERROR);
  });
});

describe('bajaFinished action', () => {
  it('should be created', () => {
    const action = bajaFinished();
    expect(action.type).toEqual(SubeBajaActionTypes.BAJA_FINISHED);
  });
});
