import React, { createContext, useContext, useState } from 'react';

// Context 생성
const LoginContext = createContext();

// Provider 컴포넌트
export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('login') !== null);
  const [IDSave, isIDSave] = useState();
  const [PWSave, isPWSave] = useState();

  const login = () => {
    setIsLogin(true);
    alert('로그인 되었습니다!');
    localStorage.setItem('login', '1');
  };

  const logout = () => {
    setIsLogin(false);
    alert('로그아웃 되었습니다!');
    localStorage.removeItem('login');
  };
  // 여기서 프로바이더의 value 으로 전달된 상태는 children의 자리에 남겨지는 모든 컴포넌트가 사용할 수 있습니다.
  return (
    <LoginContext.Provider value={{ isLogin, login, logout }}>{children}</LoginContext.Provider>
  );
};

// useContext 로 반환받은 값을 쉽게 읽어와 사용할 수 있도록 커스텀 훅을 만들어주었습니다.
export const useLogin = () => {
  return useContext(LoginContext); // useContext 의 자리에는 {isAuth..., login, logout} 이 남습니다.
};
