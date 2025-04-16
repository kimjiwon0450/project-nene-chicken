import React, { useEffect, useState } from 'react';
import './MyPageView.css';
import MyPageInfoBox from './MyPageInfoBox';
import { useMenu } from '../../context/MenuContext';
import MyPageOrderBox from './MyPageOrderBox';
import MyPageDeliveryBox from './MyPageDeliveryBox';
import MyPageCouponBox from './MyPageCouponBox';
import { Outlet, useNavigate } from 'react-router';

const MyPageView = () => {
  const [renderBox, setRenderBox] = useState();

  const { currMenu, selectMenu } = useMenu();
  const navi = useNavigate();

  const switchCurrMenuFunc = () => {
    switch (currMenu) {
      case 1:
        navi('/mypage/order');
        return <MyPageOrderBox />;
      case 2:
        navi('/mypage/delivery');
        return <MyPageDeliveryBox />;
      case 3:
        navi('/mypage/coupon');
        return <MyPageCouponBox />;
      default:
        navi('/mypage');
        return <MyPageInfoBox />;
    }
  };

  useEffect(() => {
    switchCurrMenuFunc();
  }, [currMenu]);

  return (
    <div className='my-page-wrap'>
      <Outlet />
    </div>
  );
};

export default MyPageView;
