import fileUploader from './fileUploader.types';
import fileUploaderReducer from './fileUploader.reducer';

const INITIAL_STATE = {
  files: [],
};

describe('fileUploader', () => {
  it('should return initial state', () => {
    expect(fileUploaderReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('should set payload with added files', () => {
    const MOCK = { files: [{}] };

    expect(
      fileUploaderReducer(INITIAL_STATE, {
        type: fileUploader.ADD_FILES,
        payload: [{}],
      }),
    ).toStrictEqual(MOCK);
  });
});
