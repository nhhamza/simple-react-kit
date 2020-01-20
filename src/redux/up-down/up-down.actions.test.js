import UpDownActionTypes from './up-down.types';

import {
  downStart,
  downSuccess,
  downFailure,
  downFinished,
  upStart,
  upSuccess,
  upFailure,
  upFinished,
} from './up-down.actions';

describe('upStart action', () => {
  it('should be created', () => {
    const action = upStart();
    expect(action.type).toEqual(UpDownActionTypes.UP_START);
  });
});

describe('upSuccess action', () => {
  it('should be created', () => {
    const action = upSuccess();
    expect(action.type).toEqual(UpDownActionTypes.UP_SUCCESS);
  });
});

describe('upFailure action', () => {
  it('should be created', () => {
    const MOCK_ERROR = 'error';
    const action = upFailure(MOCK_ERROR);
    expect(action.type).toEqual(UpDownActionTypes.UP_FAILURE);
    expect(action.payload).toEqual(MOCK_ERROR);
  });
});

describe('upFinished action', () => {
  it('should be created', () => {
    const action = upFinished();
    expect(action.type).toEqual(UpDownActionTypes.UP_FINISHED);
  });
});

describe('downStart action', () => {
  it('should be created', () => {
    const action = downStart();
    expect(action.type).toEqual(UpDownActionTypes.DOWN_START);
  });
});

describe('downSuccess action', () => {
  it('should be created', () => {
    const action = downSuccess();
    expect(action.type).toEqual(UpDownActionTypes.DOWN_SUCCESS);
  });
});

describe('downFailure action', () => {
  it('should be created', () => {
    const MOCK_ERROR = 'error';
    const action = downFailure(MOCK_ERROR);
    expect(action.type).toEqual(UpDownActionTypes.DOWN_FAILURE);
    expect(action.payload).toEqual(MOCK_ERROR);
  });
});

describe('downFinished action', () => {
  it('should be created', () => {
    const action = downFinished();
    expect(action.type).toEqual(UpDownActionTypes.DOWN_FINISHED);
  });
});
