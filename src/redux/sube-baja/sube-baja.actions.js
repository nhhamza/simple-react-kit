import SubeBajaActionTypes from './sube-baja.types';

export const subeStart = () => ({
  type: SubeBajaActionTypes.SUBE_START,
});

export const subeSuccess = () => ({
  type: SubeBajaActionTypes.SUBE_SUCCESS,
});

export const subeFailure = error => ({
  type: SubeBajaActionTypes.SUBE_FAILURE,
  payload: error,
});

export const subeFinished = () => ({
  type: SubeBajaActionTypes.SUBE_FINISHED,
});

export const bajaStart = () => ({
  type: SubeBajaActionTypes.BAJA_START,
});

export const bajaSuccess = () => ({
  type: SubeBajaActionTypes.BAJA_SUCCESS,
});

export const bajaFailure = error => ({
  type: SubeBajaActionTypes.BAJA_FAILURE,
  payload: error,
});

export const bajaFinished = () => ({
  type: SubeBajaActionTypes.BAJA_FINISHED,
});
