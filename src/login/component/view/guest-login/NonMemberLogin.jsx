import TermCheckBox from './TermCheckBox';
import './NonMemberLogin.css';
import GuestInputContents from './GuestInputContents';

const NonMemberLogin = () => {
  return (
    <div className='login-guest'>
      <GuestInputContents />
      <div className='term-check-wrap'>
        <TermCheckBox text={' 개인정보 수집/이용 동의(필수)'} isModal='1' />
        <TermCheckBox text={' 위치기반서비스 동의(필수)'} isModal='1' />
        <TermCheckBox text={' 본인은 14세 이상입니다.(필수)'} isModal='0' />
      </div>
      <div className='btn-guest'>비회원 주문하기</div>
      <div className='guest-title'>비회원 주문 시 할인 혜택을 받을 수 없습니다.</div>
    </div>
  );
};

export default NonMemberLogin;
