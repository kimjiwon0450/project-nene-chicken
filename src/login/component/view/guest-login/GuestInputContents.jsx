import React from 'react';
import './GuestInputContents.css';

const GuestInputContents = () => {
  return (
    <table className='inputForm'>
      <tbody>
        <tr>
          <td className='title'>연락처</td>
          <td>
            <div className='flex'>
              <select name='mobile0' id='mobile0' className='form-control mr-10'>
                <option value='010'>010</option>
                <option value='011'>011</option>
                <option value='016'>016</option>
                <option value='017'>017</option>
                <option value='018'>018</option>
                <option value='019'>019</option>
              </select>
              <input type='tel' className='form-control mr-10' />
              <input type='tel' className='form-control' />
            </div>
          </td>
        </tr>
        <tr>
          <td className='title'></td>
          <td>
            <div className='btnSubmitTel'>인증번호 발송</div>
          </td>
        </tr>
        <tr>
          <td className='title'>인증 번호</td>
          <td>
            
          </td>
        </tr>
      </tbody>
      <button>인증번호 발송</button>
      <div>인증번호 확인</div>
      <div>
        · 개인정보를 도용하여 가입한 경우,서비스 이용에 대해 제한 및 법적 제재를 받으실 수 있습니다.
      </div>
    </table>
  );
};

export default GuestInputContents;
