import React, { useState } from 'react';
import './LoginCheckBox.css';

const LoginCheckBox = ({ text, handler, storageKey }) => {
  const [check, setCheck] = useState(localStorage.getItem(storageKey));

  const changeHandler = () => {
    handler();
    setCheck(!check);
  };

  return (
    <div className='login-check'>
      <span>{text}</span>
      <input type='checkbox' onChange={changeHandler} checked={check} />
    </div>
  );
};

export default LoginCheckBox;
