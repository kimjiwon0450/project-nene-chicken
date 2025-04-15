import React from 'react';
import './MyPageInfoBox.css';
import { useMenu } from '../../context/MenuContext';

const MyPageInfoBox = () => {
  const { changeMenu } = useMenu();
  return (
    <div className='info-box'>
      <div className='user-title'>
        <div>
          <span className='user'>강하늘</span> 님 안녕하세요!
        </div>
        <div>
          <span className='btn-user'>개인정보수정</span>
          <span className='btn-user'>로그아웃</span>
        </div>
      </div>
      <div className='my-menu-wrap'>
        <div className='point-box'>
          <div className='list'>
            <p className='count'>
              <span>{0}</span>개
            </p>
            <p className='title'>쿠폰</p>
          </div>
        </div>
        <div className='menu-list'>
          <div className='btn-menu-route' onClick={() => changeMenu(1)}>
            <span className='icon'>
              <img src='https://nenechicken.com/images/icon/mypage-1.svg' alt='' />
            </span>
            주문내역
          </div>
          <div className='btn-menu-route' onClick={() => changeMenu(2)}>
            <span className='icon'>
              <img src='https://nenechicken.com/images/icon/mypage-2.svg' alt='' />
            </span>
            배달주소관리
          </div>
          <div className='btn-menu-route' onClick={() => changeMenu(3)}>
            <span className='icon'>
              <img src='https://nenechicken.com/images/icon/mypage-3.svg' alt='' />
            </span>
            쿠폰함
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageInfoBox;
