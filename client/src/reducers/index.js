import counterReducer from './counter.js';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  counter: counterReducer,
});

export default allReducer;