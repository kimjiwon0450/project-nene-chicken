import React from 'react';
import './LoginHeader.css';

const LoginHeader = () => {
  return (
    <div className='login-header'>
      <div className='yellow-login-info'>
        <div className='login-en-text'>LOGIN</div>
        <div className='login-kr-text'>로그인</div>
      </div>
      <div className='login-header-height'>
        <div className='title-wrapper'>
          <div>{'<'} &nbsp; &nbsp;로그인 </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
