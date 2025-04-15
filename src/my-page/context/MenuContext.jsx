import React, { createContext, useContext, useState } from 'react';

// Context 생성
const MenuContext = createContext();

// Provider 컴포넌트
export const MenuProvider = ({ children }) => {
  const [currMenu, setCurrMenu] = useState(0);
  const [orderIsValid, setOrderIsValid] = useState(true);
  const [couponMenu, setCouponMenu] = useState(true);

  const changeMenu = (select) => {
    setCurrMenu(select);
  };

  const setValidateOrder = (arg) => {
    setOrderIsValid(arg);
  };

  const setCoupon = (arg) => {
    setCouponMenu(arg);
  };

  // 여기서 프로바이더의 value 으로 전달된 상태는 children의 자리에 남겨지는 모든 컴포넌트가 사용할 수 있습니다.
  return (
    <MenuContext.Provider
      value={{ currMenu, orderIsValid, couponMenu, changeMenu, setValidateOrder, setCoupon }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// useContext 로 반환받은 값을 쉽게 읽어와 사용할 수 있도록 커스텀 훅을 만들어주었습니다.
export const useMenu = () => {
  return useContext(MenuContext); // useContext 의 자리에는 {isAuth..., login, logout} 이 남습니다.
};
