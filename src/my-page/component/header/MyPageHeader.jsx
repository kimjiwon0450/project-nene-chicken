import React, { useEffect, useState } from 'react';
import './MyPageHeader.css';
import MyPageMenuHeader from './MyPageMenuHeader';
import MyPageDeliveryHeader from './MyPageDeliveryHeader';
import MyPageCouponHeader from './MyPageCouponHeader';
import { useLocation } from 'react-router';

const MyPageHeader = () => {
  const [menuState, setMenuState] = useState();
  const loc = useLocation();

  const switchCurrMenuFunc = () => {
    switch (loc.pathname) {
      case '/mypage/order':
        return <MyPageMenuHeader />;
      case '/mypage/delivery':
        return <MyPageDeliveryHeader />;
      case '/mypage/coupon':
        return <MyPageCouponHeader />;
      default:
        return <div></div>;
    }
  };

  useEffect(() => {
    setMenuState(switchCurrMenuFunc());
  }, [loc.pathname]);

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
