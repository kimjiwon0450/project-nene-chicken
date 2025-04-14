import React from 'react';
import './LoginSNS.css';

const LoginSNS = () => {
  return (
    <div className='SNS-login'>
      <p className='SNS-login-title'>SNS 간편 로그인</p>
      <div className='SNS-box'>
        <div className='btnSNS kakao'>
          <img src='https://nenechicken.com/images/I_kakao.png' alt='' />
        </div>
        <div className='btnSNS naver'>
          <img src='https://nenechicken.com/images/I_naver.png' alt='' />
        </div>
        <div className='btnSNS apple'>
          <img src='https://nenechicken.com/images/I_apple.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default LoginSNS;
