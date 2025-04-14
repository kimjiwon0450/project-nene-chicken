import React from 'react';
import './InputBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputBox = ({ text_en, text_ko, icon_name }) => {
  return (
    <div className='input-box'>
      <span className='abs-text'>{text_en}</span>
      <div className='input-inner'>
        <div className='inner-icon'>
          <FontAwesomeIcon icon={icon_name} />
        </div>
        <input type='text' placeholder={text_ko} maxLength='20' />
      </div>
    </div>
  );
};

export default InputBox;
