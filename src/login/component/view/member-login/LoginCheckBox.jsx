import React, { useState } from 'react';
import './LoginCheckBox.css';

const LoginCheckBox = ({ text, handler }) => {
  return (
    <div className='login-check'>
      <span>{text}</span>
      <input type='checkbox' onChange={handler} />
    </div>
  );
};

export default LoginCheckBox;
