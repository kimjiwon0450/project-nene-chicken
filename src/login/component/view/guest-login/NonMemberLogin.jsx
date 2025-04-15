import TermCheckBox from './TermCheckBox';
import './NonMemberLogin.css';
import GuestInputContents from './GuestInputContents';
import { useState } from 'react';

const NonMemberLogin = () => {
  const [agreeControl, setAgreeControl] = useState(0);
  const [confirmPhone, setConfirmPhone] = useState(false);

  const checkHandler = (ck) => {
    setAgreeControl(agreeControl + ck);
  };

  const isConfirmPhone = (ck) => {
    setConfirmPhone(ck);
  };

  const orderAsGuest = () => {
    if (!confirmPhone) {
      alert('휴대폰을 인증해주세요.');
      return;
    }

    const term3 = Math.floor(agreeControl / 100) !== 0;
    const term2 = Math.floor((agreeControl % 100) / 10) !== 0;
    const term1 = Math.floor(agreeControl % 10) !== 0;

    if (!term1) {
      alert('개인정보수집 동의를 확인해주세요');
      return;
    } else if (!term2) {
      alert('위치기반서비스 동의를 확인해주세요');
      return;
    } else if (!term3) {
      alert('14세 이상 동의를 확인해주세요');
      return;
    }

    // 로그인 처리
  };

  return (
    <div className='login-guest'>
      <GuestInputContents isConfirmPhone={isConfirmPhone} />
      <div className='term-check-wrap'>
        <TermCheckBox
          id='1'
          text={' 개인정보 수집/이용 동의(필수)'}
          isModal='1'
          isChecked={checkHandler}
        />
        <TermCheckBox
          id='10'
          text={' 위치기반서비스 동의(필수)'}
          isModal='1'
          isChecked={checkHandler}
        />
        <TermCheckBox
          id='100'
          text={' 본인은 14세 이상입니다.(필수)'}
          isModal='0'
          isChecked={checkHandler}
        />
      </div>
      <div className='btn-guest' onClick={orderAsGuest}>
        비회원 주문하기
      </div>
      <div className='guest-title'>비회원 주문 시 할인 혜택을 받을 수 없습니다.</div>
    </div>
  );
};

export default NonMemberLogin;
