import { combineReducers } from 'redux';
import subeBajaReducer from './sube-baja/sube-baja.reducer';
import searchResultsReducer from './search/search.reducer';

const rootReducer = combineReducers({
  subeBaja: subeBajaReducer,
  search: searchResultsReducer,
});

export default rootReducer;
