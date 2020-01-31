import FileUploader from './fileUploader.types';

const INITIAL_STATE = {
  files: [],
  error: null,
};

const fileUploaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FileUploader.ADD_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
};

export default fileUploaderReducer;
