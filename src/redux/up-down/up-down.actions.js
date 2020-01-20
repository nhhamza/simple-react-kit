import UpDownaActionTypes from './up-down.types';

export const upStart = () => ({
  type: UpDownaActionTypes.UP_START,
});

export const upSuccess = () => ({
  type: UpDownaActionTypes.UP_SUCCESS,
});

export const upFailure = error => ({
  type: UpDownaActionTypes.UP_FAILURE,
  payload: error,
});

export const upFinished = () => ({
  type: UpDownaActionTypes.UP_FINISHED,
});

export const downStart = () => ({
  type: UpDownaActionTypes.DOWN_START,
});

export const downSuccess = () => ({
  type: UpDownaActionTypes.DOWN_SUCCESS,
});

export const downFailure = error => ({
  type: UpDownaActionTypes.DOWN_FAILURE,
  payload: error,
});

export const downFinished = () => ({
  type: UpDownaActionTypes.DOWN_FINISHED,
});
