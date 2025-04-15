import React, { useState } from 'react';
import './TermCheckBoxModal.css';
import CancelIcon from '../../../../assets/cancel.png';

const TermCheckBoxModal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  if (!isOpen) return null;

  return (
    <div className='terms-modal-overlay' onClick={onClose}>
      <div className='terms-modal-box' onClick={(e) => e.stopPropagation()}>
        <div className='close' onClick={onClose}>
          <img src={CancelIcon} alt='취소 아이콘' />
        </div>

        <a>개인정보 수집/이용 동의</a>

        <div className='terms-content'>
          <div className='select-wrapper'>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value=''>약관을 선택하세요</option>
              <option value='service'>서비스 이용약관</option>
              <option value='privacy'>개인정보 처리방침</option>
            </select>
          </div>
          <p>
            제1조 (목적) 본 약관은 네네치킨의 서비스 이용 조건 및 절차에 관한 사항을 규정함을
            목적으로 합니다. <br />
            <br />
            제2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. ...
            <br />
            <br />
            제3조 (약관의 효력 및 변경) 본 약관은 서비스를 통해 게시함으로써 효력이 발생합니다.
            회사는 ...
            <br /> 본인은 신원조사기관이 본인에 대한 신원조사를 실시할 필요가 있다는 것과
            개인정보(범죄 경력 등 민감정보 포함. 이하 동일) 수집 목적 등 아래 유의사항을
            이해하였으며, 이를 위해 ｢개인정보보호법｣ 등에 의해 보호되고 있는 본인의 개인정보를 동법
            제15조(개인정보의 수집ㆍ이용)의 규정 등에 따라 신원조사기관에 제공하는데 동의합니다.
            <br /> 이에 따라, 개인정보 보유기관장은 원활한 신원조사를 위해 본인에 관한 개인정보를
            해당 신원 조사기관에게 제공하여 줄 것을 요청합니다.
            <br /> 본인이 서명한 동의서 복사본은 원본과 동일하게 유효하다는 것을 인정합니다.
            <br />
            수집된 개인정보자료ㆍ개인정보 제공 동의서는 신원조사 목적으로만
            사용되고,「공공기록물관리에관한법률」에 따라 관리ㆍ폐기되며 수집하려는 개인정보의 항목은
            아래와 같습니다. ￭ 개인의 자유로운 의사에 따라 정보 제공동의를 거부할 수 있습니다. 다만,
            이 경우 신원조사를 원활히 진행할 수 없음을 알려드립니다.
            <br />
            본인은 신원조사기관이 본인에 대한 신원조사를 실시할 필요가 있다는 것과 개인정보(범죄
            경력 등 민감정보 포함. 이하 동일) 수집 목적 등 아래 유의사항을 이해하였으며, 이를 위해
            ｢개인정보보호법｣ 등에 의해 보호되고 있는 본인의 개인정보를 동법 제15조(개인정보의
            수집ㆍ이용)의 규정 등에 따라 신원조사기관에 제공하는데 동의합니다. ■ 이에 따라, 개인정보
            보유기관장은 원활한 신원조사를 위해 본인에 관한 개인정보를 해당 신원 조사기관에게
            제공하여 줄 것을 요청합니다. ■ 본인이 서명한 동의서 복사본은 원본과 동일하게 유효하다는
            것을 인정합니다. 유의사항 (개인정보 수집 목적ㆍ관리방법, 정보제공 동의 거부 가능 고지) ￭
            수집된 개인정보자료ㆍ개인정보 제공 동의서는 신원조사 목적으로만
            사용되고,「공공기록물관리에관한법률」에 따라 관리ㆍ폐기되며 수집하려는 개인정보의 항목은
            아래와 같습니다. ￭ 개인의 자유로운 의사에 따라 정보 제공동의를 거부할 수 있습니다. 다만,
            이 경우 신원조사를 원활히 진행할 수 없음을 알려드립니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermCheckBoxModal;
