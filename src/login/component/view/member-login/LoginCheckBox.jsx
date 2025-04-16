import React, { useEffect, useState } from 'react';
import './LoginCheckBox.css';

const LoginCheckBox = ({ text, handler, storageKey }) => {
  const [check, setCheck] = useState(localStorage.getItem(storageKey) !== null);

  const changeHandler = () => {
    setCheck(!check);
    handler(check);
  };

  useEffect(() => {
    handler(check);
  }, [check]);

  return (
    <div className='login-check'>
      <span>{text}</span>
      <input type='checkbox' onChange={changeHandler} checked={check} />
    </div>
  );
};

export default LoginCheckBox;
