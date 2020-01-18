import SubeBajaActionTypes from './sube-baja.types';
import subeBajaReducer from './sube-baja.reducer';

const initialState = {
  number: 0,
  error: null,
  isLoading: false,
};

describe('subeBajaReducer', () => {
  describe('sube', () => {
    it('should return initial state', () => {
      expect(subeBajaReducer(undefined, {})).toEqual(initialState);
    });

    it('should put isLoading to true on sube start', () => {
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.SUBE_START,
        }).isLoading,
      ).toBeTruthy();
    });

    it('should add +1 to number on sube success', () => {
      const EXPECTED_NUMBER = 1;
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.SUBE_SUCCESS,
        }).number,
      ).toEqual(EXPECTED_NUMBER);
    });

    it('should set errorMessage to payload on sube failure', () => {
      const mockError = {
        message: 'error',
        code: 404,
      };
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.SUBE_FAILURE,
          payload: mockError,
        }).error,
      ).toBe(mockError);
    });

    it('should put isLoading to false on sube finished', () => {
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.SUBE_FINISHED,
        }).isLoading,
      ).toBeFalsy();
    });
  });

  describe('baja', () => {
    it('should return initial state', () => {
      expect(subeBajaReducer(undefined, {})).toEqual(initialState);
    });

    it('should put isLoading to true on baja start', () => {
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.BAJA_START,
        }).isLoading,
      ).toBeTruthy();
    });

    it('should add +1 to number on baja success', () => {
      const EXPECTED_NUMBER = -1;
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.BAJA_SUCCESS,
        }).number,
      ).toEqual(EXPECTED_NUMBER);
    });

    it('should set errorMessage to payload on baja failure', () => {
      const mockError = {
        message: 'error',
        code: 404,
      };
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.BAJA_FAILURE,
          payload: mockError,
        }).error,
      ).toBe(mockError);
    });

    it('should put isLoading to false on baja finished', () => {
      expect(
        subeBajaReducer(initialState, {
          type: SubeBajaActionTypes.BAJA_FINISHED,
        }).isLoading,
      ).toBeFalsy();
    });
  });
});
