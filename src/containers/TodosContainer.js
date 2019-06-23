// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
    handleChange = (e) => {
        // 인풋 값 변경
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    };

    handleInsert = () => {
        const { input, TodoActions } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    };

    handleToggle = (id) => {
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    };

    handleRemove = (id) =>{
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    };

    render() {
        const { handleChange, handleInsert, handleToggle, handleRemove} = this;
        const { input, todos } = this.props;
        return (
            <Todos
                input={input}
                todos={todos}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}


// connect()는 컴포넌트에 props를 넣는 함수를 반환, 반환된 함수에 해당 컴포넌트를 넣어준다.
export default connect(
    // state 비구조할당
    ({todo}) => ({
        input: todo.get('input'),
        todos: todo.get('todos')
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodosContainer);