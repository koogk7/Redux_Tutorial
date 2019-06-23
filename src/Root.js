import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/App';

// 최상위 컴포넌트
// 리덕스와 연동된 컴포넌트를 컨테이너 컴포넌트
// 뷰만을 보여주기 위한 컴포넌트를 프리젠테이셔널 컴포넌트
// store 패키지는 리덕스 관련 코드
//

const Root = () => {
    return (
        // react-redux에 들어있는 Provider를 사용하여 리덕스 적용
        <Provider store={store}>
          <App />
        </Provider>
);
};

export default Root;