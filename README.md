
### Screen Shot  
![](https://j.gifs.com/jZv3mP.gif)
### Project Struct
<a href="https://ibb.co/VJxxBb5"><img src="https://i.ibb.co/7jQQyBL/image.png" alt="image" border="0"></a>
 
 
### Review
- Redux를 만들는 과정은 아래와 같다.
    - store 패키지 내부에 액션과 리듀서를 작성할 자바스크립트 파일을 생성한 후 작성한다. (액션과 리듀서를 하나의 파일에 작성하는 구조를 Duck 구조라 한다.) 이 때 서로 다른 모듈에서 같은 액션의 이름을 사용 할 수 있게 액션 이름 앞에 도메인을 추가 해준다.
    ```javascript
    # 액션 정의
    const CHANGE_INPUT = 'todo/CHANGE_INPUT';
    
    # 액션 생성함수 정의
    export const changeInput = createAction(CHANGE_INPUT, value => value);
    
    # state 초기 값 정의 , immutable.js 객체 사용
    const initialState = Map({
        input: '',
        todos: List()
    });
    
    # 리듀서 정의
    export default handleActions({
        [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    }, initialState);
   ```
    - modules/index.js 파일에서 combineReducers를 이용해 모듈 단위 리듀서들을 합친다.
    ```javascript
      export default combineReducers({
        counter,
        todo
      })
    ```
    - configure.js에서 스토어를 생성하고 내보낸다.
    ```javascript
        const configure = () => {
        // const store = createStore(modules);
        // 크롬확장프로그램(redux-devtools)을 이용
        const devTools = window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
        const store = createStore(module, devTools);
        return store;
    }

    export default  configure;
    ```
    
