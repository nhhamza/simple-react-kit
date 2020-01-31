import fileUploader from './fileUploader.types';
import { addFiles } from './fileUploader.actions';

describe('Add files uploader actions', () => {
  describe('addFiles action', () => {
    it('should be created', () => {
      const MOCK_PAYLOAD = { files: [] };
      const action = addFiles(MOCK_PAYLOAD);
      expect(action.type).toEqual(fileUploader.ADD_FILES);
      expect(action.payload).toEqual(MOCK_PAYLOAD);
    });
  });
});
