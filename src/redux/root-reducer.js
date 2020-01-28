import { combineReducers } from 'redux';
import upDownReducer from './up-down/up-down.reducer';
import searchResultsReducer from './search/search.reducer';
import fileUploaderReducer from './file-uploader/fileUploader.reducer';

const rootReducer = combineReducers({
  upDown: upDownReducer,
  search: searchResultsReducer,
  fileUploader: fileUploaderReducer,
});

export default rootReducer;
