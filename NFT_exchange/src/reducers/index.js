import { combineReducers } from 'redux';
import ChangeReducer from './changeReducer';

export default combineReducers({
  titleNum: ChangeReducer
});