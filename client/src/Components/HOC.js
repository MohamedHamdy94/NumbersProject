import React from 'react';
import Login from '../Pages/Login';

const HOC = (Components) => {
  return function NewComponent() {
    const isLogin = JSON.parse(localStorage.getItem('userInfo'));
    return isLogin ? <Components /> : <Login />;
  };
};

export default HOC;
