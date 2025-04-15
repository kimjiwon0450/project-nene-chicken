import React, { useEffect, useState } from 'react';
import './MyPageHeader.css';
import { useMenu } from '../../context/MenuContext';
import MyPageMenuHeader from './MyPageMenuHeader';
import MyPageDeliveryHeader from './MyPageDeliveryHeader';
import MyPageCouponHeader from './MyPageCouponHeader';

const MyPageHeader = () => {
  const [menuState, setMenuState] = useState();
  const { currMenu } = useMenu();

  const switchCurrMenuFunc = () => {
    switch (currMenu) {
      case 1:
        return <MyPageMenuHeader />;
      case 2:
        return <MyPageDeliveryHeader />;
      case 3:
        return <MyPageCouponHeader />;
      default:
        return;
    }
  };

  useEffect(() => {
    setMenuState(switchCurrMenuFunc());
  }, [currMenu]);

  return (
    <div className='my-header-wrap'>
      <div className='my-header-box'>
        <div className='my-header-title'>
          <div className='my-H-title-text'>My Page</div>
        </div>
        <div className='my-header-content'>
          <div className='my-header-content-wrap'>{menuState}</div>
        </div>
      </div>
    </div>
  );
};

export default MyPageHeader;
