import React, { useEffect, useState } from 'react';
import './MyPageView.css';
import MyPageInfoBox from './MyPageInfoBox';
import { useMenu } from '../../context/MenuContext';
import MyPageOrderBox from './MyPageOrderBox';
import MyPageDeliveryBox from './MyPageDeliveryBox';
import MyPageCouponBox from './MyPageCouponBox';

const MyPageView = () => {
  const [menuState, setMenuState] = useState();
  const { currMenu } = useMenu();

  const switchCurrMenuFunc = () => {
    switch (currMenu) {
      case 1:
        return <MyPageOrderBox />;
      case 2:
        return <MyPageDeliveryBox />;
      case 3:
        return <MyPageCouponBox />;
      default:
        return <MyPageInfoBox />;
    }
  };

  useEffect(() => {
    setMenuState(switchCurrMenuFunc());
  }, [currMenu]);

  return <div className='my-page-wrap'>{menuState}</div>;
};

export default MyPageView;
