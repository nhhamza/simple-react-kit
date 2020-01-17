import SubeBajaActionTypes from './sube-baja.types';

const INITIAL_STATE = {
  number: 0,
  isLoading: false,
  error: null,
};

const subeBajaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SubeBajaActionTypes.BAJA_START:
    case SubeBajaActionTypes.SUBE_START:
      return {
        ...state,
        isLoading: true,
      };

    case SubeBajaActionTypes.SUBE_SUCCESS:
      return {
        ...state,
        number: state.number + 1,
      };
    case SubeBajaActionTypes.BAJA_SUCCESS:
      return {
        ...state,
        number: state.number - 1,
      };

    case SubeBajaActionTypes.BAJA_FAILURE:
    case SubeBajaActionTypes.SUBE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SubeBajaActionTypes.SUBE_FINISHED:
    case SubeBajaActionTypes.BAJA_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subeBajaReducer;
