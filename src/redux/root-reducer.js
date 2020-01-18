import { combineReducers } from 'redux';
import subeBajaReducer from './sube-baja/sube-baja.reducer';

const rootReducer = combineReducers({ subeBaja: subeBajaReducer });

export default rootReducer;
