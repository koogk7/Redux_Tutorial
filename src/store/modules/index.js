// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐
// 루트 리듀서
import {combineReducers} from 'redux';
import counter from './counter';
import todo from "./todo";
// 리듀서 추가
export default combineReducers({
    counter,
    todo
})
