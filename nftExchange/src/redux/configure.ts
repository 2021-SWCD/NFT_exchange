//디스패치는 액션을 발생시키는 함수
import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
//비동기 작업을 할때 지금은 바로바로 실행하는것밖에 안되는데
//이 모듈을 사용함으로써 디스패치가 바로되지않고 비동기 작업이 완료되면 디스패치를 요청할수있다.
import ReduxThunk from 'redux-thunk';
//로그 생성 모듈
import { createLogger } from 'redux-logger';
//비동기 방식의 서버요청등 리덕스에서 설정하기 더 쉽게 하는 모듈
//쓰는방법 /modules/test.js확인
import penderMiddleware from 'redux-pender';

//미들웨어 선언 사용 버전일때는 로그가 없어야되니깐
let middlewares = applyMiddleware(ReduxThunk, penderMiddleware());

//개발 버전일때
if (false) {
    //로그 생성 모듈
    const logger = createLogger(); 
    //미들웨어 선언
    middlewares = applyMiddleware(logger, ReduxThunk,penderMiddleware());
}
//스토어 생성 두번째 파라미터가 있으면 미들웨어 추가
const store = createStore(modules, middlewares);
//스토어 반환
export default store;