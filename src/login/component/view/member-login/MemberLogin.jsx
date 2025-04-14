import React from 'react';
import InputBox from './InputBox';
import './MemberLogin.css';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import LoginCheckBox from './LoginCheckBox';
import LoginSNS from './LoginSNS';
import LoginFind from './LoginFind';

const MemberLogin = () => {
  return (
    <div className='login-member'>
      <InputBox id='0' text_en='ID' text_ko={'아이디'} icon_name={faUser} />
      <InputBox id='1' text_en={'PASSWORD'} text_ko={'비밀번호'} icon_name={faLock} />
      <div className='id-check-box'>
        <LoginCheckBox text={'아이디 저장'} />
        <LoginCheckBox text={'자동 로그인'} />
      </div>
      <div className='login-btn-box'>
        <div className='btn-login'>로그인</div>
        <div className='btn-join'>회원가입</div>
      </div>
      <LoginFind />
      <div className='login-line'></div>
      <LoginSNS />
    </div>
  );
};

export default MemberLogin;
