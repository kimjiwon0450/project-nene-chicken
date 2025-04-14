import React from 'react';
import TermCheckBox from './TermCheckBox';
import './NonMemberLogin.css';
import GuestInputContents from './GuestInputContents';

const NonMemberLogin = () => {
  return (
    <div className='login-guest'>
      <GuestInputContents />
      <div className='term-check'>
        <TermCheckBox />
        <TermCheckBox />
        <TermCheckBox />
      </div>
      <button>비회원 주문하기</button>
      <p>비회원 주문 시 할인 혜택을 받을 수 없습니다.</p>
    </div>
  );
};

export default NonMemberLogin;
