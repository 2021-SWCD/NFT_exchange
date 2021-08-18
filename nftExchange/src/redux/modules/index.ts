import { combineReducers } from 'redux';
import tokenInfo from './tokenInfo';
import language from "./language";
import page from "./page";

//이것은 리듀셔를 하나로 합치는 모듈
export default combineReducers({
    tokenInfo,
    language,
    page
});