import UpDownActionTypes from './up-down.types';

const INITIAL_STATE = {
  number: 0,
  isLoading: false,
  error: null,
};

const subeBajaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UpDownActionTypes.DOWN_START:
    case UpDownActionTypes.UP_START:
      return {
        ...state,
        isLoading: true,
      };

    case UpDownActionTypes.UP_SUCCESS:
      return {
        ...state,
        number: state.number + 1,
      };
    case UpDownActionTypes.DOWN_SUCCESS:
      return {
        ...state,
        number: state.number - 1,
      };

    case UpDownActionTypes.DOWN_FAILURE:
    case UpDownActionTypes.UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UpDownActionTypes.UP_FINISHED:
    case UpDownActionTypes.DOWN_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subeBajaReducer;
