import React from 'react';
import './CouponBox.css';
import { useMenu } from '../../context/MenuContext';

const CouponBox = ({ text }) => {
  const { couponMenu } = useMenu();
  return (
    <div className={couponMenu ? 'my-coupon-drop' : 'coupon-download'}>
      <div className='title-coupon'>
        {text}
        <p className='coupon-count'>
          {couponMenu ? '' : '다운가능한 쿠폰 '}
          <span className='color'>
            <span className='count'>0</span>장
          </span>
        </p>
      </div>
      <div className='down-pop'>
        <div className='content-none'>
          <img src='https://nenechicken.com/images/orderNone.png' alt='' />
          <p className='none-title'>해당 내역이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default CouponBox;
