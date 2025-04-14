import React, { useState } from 'react';
import './LoginView.css';
import MemberLogin from './member-login/MemberLogin';
import NonMemberLogin from './guest-login/NonMemberLogin';

const LoginView = () => {
  const [selectMember, isSelectMember] = useState(true);

  return (
    <div className='login-view'>
      <div className='login-wrap'>
        <h1>
          정직한 음식이 만드는 행복한 세상! <br />
          네네치킨에 오신 것을 환영합니다
        </h1>
        <div className='login-tab'>
          <div
            className={`Ltab ${selectMember ? 'active' : ''}`}
            onClick={() => isSelectMember(true)}
          >
            회원 로그인
          </div>
          <div
            className={`Ltab ${!selectMember ? 'active' : ''}`}
            onClick={() => isSelectMember(false)}
          >
            비회원 로그인
          </div>
        </div>
        {selectMember ? <MemberLogin /> : <NonMemberLogin />}
      </div>
    </div>
  );
};

export default LoginView;
