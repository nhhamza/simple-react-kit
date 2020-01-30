import FileUploader from './fileUploader.types';

const INITIAL_STATE = {
  files: [],
};

const fileUploaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FileUploader.ADD_FILES:
      return { ...state };
    default:
      return state;
  }
};

export default fileUploaderReducer;
