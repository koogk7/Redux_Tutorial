import { createAction, handleActions } from "redux-actions";
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

// createAction을 통하여 만든 액션생섬하수에 파라미터를 넣으서 호출하면, 자동으로 payload라는 이름으로
// 통일되어 설정 ex ) changeInput("새로운 값");
// --> { type: 'todo/CHANGE_INPUT', payload: '새로운 값' }

// createAction(액션이름, payloadCreator, metaCreator=Null)
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Map({
    input: '',
    todos: List()
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    // action 객체를 비구조 할당하고 payload값을 text라고 사용
    [INSERT]: (state, {payload :text}) => {
        const item = Map({id: id++, checked: false, text});
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id}) =>{
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, { payload : id }) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);