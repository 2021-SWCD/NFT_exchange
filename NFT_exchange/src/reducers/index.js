import { combineReducers } from 'redux';
import ChangeReducer from './changeReducer';

export default combineReducers({
  count: ChangeReducer
});