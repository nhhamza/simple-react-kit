import { combineReducers } from 'redux';
import upDownReducer from './up-down/up-down.reducer';
import searchResultsReducer from './search/search.reducer';

const rootReducer = combineReducers({
  upDown: upDownReducer,
  search: searchResultsReducer,
});

export default rootReducer;
