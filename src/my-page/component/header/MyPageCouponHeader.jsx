import React, { useState } from 'react';
import './MyPageCouponHeader.css';
import { useMenu } from '../../context/MenuContext';

const MyPageCouponHeader = () => {
  const [tabState, setTabState] = useState(true);
  const { setCoupon } = useMenu();
  const couponClickHandler = (arg) => {
    setTabState(arg);
    setCoupon(arg);
  };
  return (
    <div className='coupon-header-tab'>
      <div className='tab' onClick={() => couponClickHandler(true)}>
        <span className={tabState ? 'on' : ''}>쿠폰함</span>
      </div>
      <div className='tab' onClick={() => couponClickHandler(false)}>
        <span className={!tabState ? 'on' : ''}>쿠폰다운로드</span>
      </div>
    </div>
  );
};

export default MyPageCouponHeader;
