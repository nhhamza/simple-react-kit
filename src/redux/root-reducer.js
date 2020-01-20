import { combineReducers } from 'redux';
import upDownReducer from './up-down/up-down.reducer';

const rootReducer = combineReducers({ upDown: upDownReducer });

export default rootReducer;
