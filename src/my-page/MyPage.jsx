import React from 'react';
import MyPageHeader from './component/header/MyPageHeader';
import './MyPage.css';
import MyPageView from './component/view/MyPageView';
import { MenuProvider } from './context/MenuContext';

const MyPage = () => {
  
  return (
    <>
      <MenuProvider>
        <div className='myPage-container'>
          <MyPageHeader />
          <MyPageView />
        </div>
      </MenuProvider>
    </>
  );
};

export default MyPage;
