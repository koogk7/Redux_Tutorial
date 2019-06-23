// 카운터 관련 상태 로직,
// Ducks 구조 : 액션과 리듀서를 하나의 파일에 작성, 리덕스 관련 코드를 기능별로
// 하나의 파일로 나눠서 작성, 앞에 도메인을 추가하는 방식으로 서로다른 모듈에서 동일한
// 액션 이름을 가질 수 있게함 예를들어서, 다른 모듈에서도 INCREMENT 라는 이름을
// 사용하되 “another/INCREMENT” 값을 담게하면 됨

// 액션 타입을 정의해줍니다.
import {createAction, handleActions} from "redux-actions";

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 함으로 내보내줍니다.
// export  const increment = () => ({type: INCREMENT});
// export  const decrement = () => ({type: DECREMENT});

// createAction으로 Action 생성함수 만들기
export  const increment = createAction(INCREMENT);
export  const decrement = createAction(DECREMENT);

// 모듈의 초기상태를 정의합니다.
const initialState = {
    number: 0
};

// 리듀서를 만들어서 내보내줍니다. State와 action이 인자
// export  default  function reducer(state = initialState, action) {
//         //리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환
//         // sttate = initialState는 state의 기본값을 지정
//         switch(action.type){
//             case INCREMENT :
//                 return {number : state.number + 1};
//             case DECREMENT :
//                 return {number : state.number - 1};
//             default :
//                 return state;
//         }
// }

//handleActions로 리듀서 만들기
// handleActions 의 첫번째 파라미터는 액션을 처리흔 함수로 이뤄진 객체이고
// 두번째 파라미터는 초기상태입니다.
export default handleActions({
    [INCREMENT] : (state,action) => {
        return {number : state.number + 1};
    },
    [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState)
