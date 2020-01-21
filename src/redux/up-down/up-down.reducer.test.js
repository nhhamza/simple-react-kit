import UpDownActionTypes from './up-down.types';
import upDownReducer from './up-down.reducer';

const initialState = {
  number: 0,
  error: null,
  isLoading: false,
};

describe('upDownReducer', () => {
  describe('up', () => {
    it('should return initial state', () => {
      expect(upDownReducer(undefined, {})).toEqual(initialState);
    });

    it('should put isLoading to true on up start', () => {
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.UP_START,
        }).isLoading,
      ).toBeTruthy();
    });

    it('should add +1 to number on up success', () => {
      const EXPECTED_NUMBER = 1;
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.UP_SUCCESS,
        }).number,
      ).toEqual(EXPECTED_NUMBER);
    });

    it('should set errorMessage to payload on up failure', () => {
      const mockError = {
        message: 'error',
        code: 404,
      };
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.UP_FAILURE,
          payload: mockError,
        }).error,
      ).toBe(mockError);
    });

    it('should put isLoading to false on up finished', () => {
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.UP_FINISHED,
        }).isLoading,
      ).toBeFalsy();
    });
  });

  describe('down', () => {
    it('should return initial state', () => {
      expect(upDownReducer(undefined, {})).toEqual(initialState);
    });

    it('should put isLoading to true on down start', () => {
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.DOWN_START,
        }).isLoading,
      ).toBeTruthy();
    });

    it('should add +1 to number on down success', () => {
      const EXPECTED_NUMBER = -1;
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.DOWN_SUCCESS,
        }).number,
      ).toEqual(EXPECTED_NUMBER);
    });

    it('should set errorMessage to payload on down failure', () => {
      const mockError = {
        message: 'error',
        code: 404,
      };
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.DOWN_FAILURE,
          payload: mockError,
        }).error,
      ).toBe(mockError);
    });

    it('should put isLoading to false on down finished', () => {
      expect(
        upDownReducer(initialState, {
          type: UpDownActionTypes.DOWN_FINISHED,
        }).isLoading,
      ).toBeFalsy();
    });
  });
});
