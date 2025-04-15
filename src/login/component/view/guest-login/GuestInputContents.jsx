import { useEffect, useState } from 'react';
import './GuestInputContents.css';

const GuestInputContents = ({ isConfirmPhone }) => {
  const [activateConfirm, setActivateConfirm] = useState(false);
  const [timeDisplay, setTimeDisplay] = useState(91);
  const [isConfirm, setIsConfirm] = useState(false);
  const [confirmNum, setConfirmNum] = useState('');
  const [telMid, setTelMid] = useState('');
  const [telLast, setTelLast] = useState('');

  const onActivate = () => {
    if (telMid.length === 4 && telLast.length === 4) {
      setActivateConfirm(true);
    } else {
      alert('휴대폰 번호를 정확히 입력해주세요.');
    }
  };

  const changeTelMidHandler = (e) => setTelMid(e.target.value);
  const changeTelLastHandler = (e) => setTelLast(e.target.value);

  const timeCalculate = (sec) => {
    return '0' + Math.floor(sec / 60).toString() + ':' + (sec % 60).toString().padStart(2, '0');
  };

  const checkConfirmHandler = () => {
    if (confirmNum === '1111') {
      alert('인증에 성공하였습니다.');
      setIsConfirm(true);
      setActivateConfirm(false);
      isConfirmPhone(true);
    } else {
      alert('인증에 실패하였습니다. 다시 시도해주세요');
      setActivateConfirm(false);
      setConfirmNum('');
      setTimeDisplay(91);
    }
  };

  const confirmInputHandler = (e) => {
    setConfirmNum(e.target.value);
  };

  useEffect(() => {
    if (!activateConfirm) return;

    setTimeDisplay(timeDisplay - 1);

    setTimeout(() => {
      setActivateConfirm(false);
    }, 91000);
  }, [activateConfirm]);

  useEffect(() => {
    if (timeDisplay === 91) return;

    if (timeDisplay < 1) setTimeDisplay(91);

    const timer = setInterval(() => {
      setTimeDisplay(timeDisplay - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeDisplay]);

  return (
    <table className='inputForm'>
      <tbody>
        <tr>
          <td className='title pb-10'>연락처</td>
          <td className='pb-10'>
            <div className='flex'>
              <select name='mobile0' id='mobile0' className='form-control mr-10'>
                <option value='010'>010</option>
                <option value='011'>011</option>
                <option value='016'>016</option>
                <option value='017'>017</option>
                <option value='018'>018</option>
                <option value='019'>019</option>
              </select>
              <input
                type='tel'
                className='form-control mr-10'
                onChange={changeTelMidHandler}
                value={telMid}
                maxLength={4}
              />
              <input
                type='tel'
                className='form-control'
                onChange={changeTelLastHandler}
                value={telLast}
                maxLength={4}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td className='title'></td>
          <td>
            <div
              className='btnSubmitTel pb-10'
              onClick={
                isConfirm
                  ? () => {
                      alert('이미 인증이 완료되었습니다.');
                    }
                  : onActivate
              }
            >
              {isConfirm ? '인증 완료' : '인증번호 발송'}
            </div>
          </td>
        </tr>
        <tr className={activateConfirm ? '' : 'deactivate'}>
          <td className='title pb-10'>인증 번호</td>
          <td className='pb-10'>
            <div className='flex'>
              <div className='guest-relative mr-10'>
                <input
                  type='text'
                  className='form-control'
                  maxLength={4}
                  onChange={confirmInputHandler}
                  value={confirmNum}
                />
                <span className='timer-title'>{timeCalculate(timeDisplay)}</span>
              </div>
              <div className='btn-confirmNum pb-10' onClick={checkConfirmHandler}>
                인증번호 확인
              </div>
            </div>
          </td>
        </tr>
        <tr className={activateConfirm ? '' : 'deactivate'}>
          <td className='title pb-10'></td>
          <td className='info-title'>
            · 개인정보를 도용하여 가입한 경우,서비스 이용에 대해 제한 및 법적 제재를 받으실 수
            있습니다.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GuestInputContents;
