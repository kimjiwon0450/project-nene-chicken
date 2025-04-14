import React from 'react';
import './LoginCheckBox.css';

const LoginCheckBox = ({ text }) => {
  return (
    <div className='login-check'>
      <span>{text}</span>
      <input type='checkbox' />
    </div>
  );
};

export default LoginCheckBox;
