import React from 'react';
import './AppTemplate.css';

// 두가지 화면을 화면에 레이아웃 해주는 역할
const AppTemplate = ({counter, todos}) => {
  return (
    <div className="app-template">
      <div className="counter">{counter}</div>
      <div className="todos">{todos}</div>
    </div>
  );
};

export default AppTemplate;