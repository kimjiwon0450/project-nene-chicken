import React, { useEffect } from 'react';
import './InputBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputBox = ({ text_en, text_ko, icon_name, saved, currVal }) => {
  const changeValue = (e) => {
    currVal(e.target.value);
  };

  return (
    <div className='input-box'>
      <span className='abs-text'>{text_en}</span>
      <div className='input-inner'>
        <div className='inner-icon'>
          <FontAwesomeIcon icon={icon_name} />
        </div>
        <input
          type={text_en === 'PASSWORD' ? 'password' : 'text'}
          placeholder={text_ko}
          maxLength='20'
          defaultValue={saved ? saved : ''}
          onChange={changeValue}
        />
      </div>
    </div>
  );
};

export default InputBox;
