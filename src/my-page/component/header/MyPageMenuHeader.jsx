import React, { useState } from 'react';
import './MyPageMenuHeader.css';
import { useMenu } from '../../context/MenuContext';

const MyPageMenuHeader = () => {
  const [tabState, setTabState] = useState(true);
  const { setValidateOrder } = useMenu();
  const clickValidHandler = (arg) => {
    setTabState(arg);
    setValidateOrder(arg);
  };
  return (
    <div className='menu-header-tab'>
      <div className='tab' onClick={() => clickValidHandler(true)}>
        <span className={tabState ? 'on' : ''}>포장/배달주문</span>
      </div>
      <div className='tab' onClick={() => clickValidHandler(false)}>
        <span className={!tabState ? 'on' : ''}>모바일교환권/금액권</span>
      </div>
    </div>
  );
};

export default MyPageMenuHeader;
