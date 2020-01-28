import { createSelector } from 'reselect';

const selectFiles = state => state.fileUploader;

export const selectedFiles = createSelector(
  [selectFiles],
  fileUploader => fileUploader.files,
);
