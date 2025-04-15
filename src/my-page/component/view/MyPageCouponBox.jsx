import React from 'react';
import './MyPageCouponBox.css';
import { useMenu } from '../../context/MenuContext';
import CouponBox from './CouponBox';

const MyPageCouponBox = () => {
  const { couponMenu } = useMenu();
  return (
    <div className='coupon-wrap'>
      <div className='coupon-box'>
        <div className='content-title'>
          네네 쿠폰 {couponMenu ? '현황' : '다운로드하고'}
          <br />
          편리하게 사용하세요.
        </div>
        <div className='coupon-down-wrap'>
          <div className='down-flex'>
            {couponMenu ? (
              <CouponBox text='보유쿠폰' />
            ) : (
              <>
                <CouponBox text='본사' />
                <span className='down-flex-line'></span>
                <CouponBox text='매장' />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageCouponBox;
