import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import './MemberLogin.css';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import LoginCheckBox from './LoginCheckBox';
import LoginSNS from './LoginSNS';
import LoginFind from './LoginFind';
import { useLogin } from '../../../../context/loginContext';
import { useNavigate } from 'react-router';

const MemberLogin = () => {
  const [savedId, setSavedId] = useState('');
  const [savedPw, setSavedPw] = useState('');
  const [IDSave, isIDSave] = useState(false);
  const [loginSave, isLoginSave] = useState(false);
  const [currID, setCurrID] = useState('');
  const [currPW, setCurrPW] = useState('');

  const { login } = useLogin();
  const navi = useNavigate();

  useEffect(() => {
    setSavedId(localStorage.getItem('savedID') ?? '');
    setSavedPw(localStorage.getItem('savedPW') ?? '');
  }, []);

  const IDChangeHandler = (id) => setCurrID(id);
  const PWChangeHandler = (pw) => setCurrPW(pw);
  const IDSaveHandler = (check) => isIDSave(check);
  const loginSaveHandler = (check) => isLoginSave(check);

  const submitLoginHandler = () => {
    let finalID = currID;
    let finalPW = currPW;

    const remainedID = localStorage.getItem('savedID') ?? '';
    const remainedPW = localStorage.getItem('savedPW') ?? '';
    if (currID === '' && remainedID !== '') finalID = remainedID;
    if (currPW === '' && remainedPW !== '') finalPW = remainedPW;

    // 아이디 비밀번호 맞는 지 확인
    if (finalID === 'aaaa' && finalPW === '1111') {
      // 로그인 성공 처리
      // 1. 버튼 입력에 따라 local storage 저장

      // 1. IDSave && loginSave => id, pw
      // 2. IDSave && !loginSave => id
      // 3. !IDSave && loginSave => id, pw
      // 4. !IDSave && !loginSave =>

      if (loginSave) {
        localStorage.setItem('savedPW', finalPW);
        localStorage.setItem('savedID', finalID);
      } else if (IDSave) {
        localStorage.setItem('savedID', finalID);
        localStorage.removeItem('savedPW', finalPW);
      } else {
        localStorage.removeItem('savedID');
        localStorage.removeItem('savedPW');
      }

      login();
      navi('/');
    } else {
      alert('잘못된 아이디와 비밀번호 입니다.');
      localStorage.removeItem('savedID');
      localStorage.removeItem('savedPW');
    }
  };

  return (
    <div className='login-member'>
      <InputBox
        id='0'
        text_en='ID'
        text_ko={'아이디'}
        icon_name={faUser}
        saved={savedId}
        currVal={IDChangeHandler}
      />
      <InputBox
        id='1'
        text_en={'PASSWORD'}
        text_ko={'비밀번호'}
        icon_name={faLock}
        saved={savedPw}
        currVal={PWChangeHandler}
      />
      <div className='id-check-box'>
        <LoginCheckBox text={'아이디 저장'} handler={IDSaveHandler} storageKey={'savedID'} />
        <LoginCheckBox text={'자동 로그인'} handler={loginSaveHandler} storageKey={'savedPW'} />
      </div>
      <div className='login-btn-box'>
        <div className='btn-login' onClick={submitLoginHandler}>
          로그인
        </div>
        <div className='btn-join'>회원가입</div>
      </div>
      <LoginFind />
      <div className='login-line'></div>
      <LoginSNS />
    </div>
  );
};

export default MemberLogin;
