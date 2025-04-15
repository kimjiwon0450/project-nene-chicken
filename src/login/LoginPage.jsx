import React from 'react';
import LoginView from './component/view/LoginView';
import LoginHeader from './component/header/LoginHeader';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className='login-page'>
      <LoginHeader />
      <LoginView />
    </div>
  );
};

export default LoginPage;
