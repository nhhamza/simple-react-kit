import FileUploaderTypes from './fileUploader.types';

export const addFiles = files => ({
  type: FileUploaderTypes.ADD_FILES,
  payload: files,
});
