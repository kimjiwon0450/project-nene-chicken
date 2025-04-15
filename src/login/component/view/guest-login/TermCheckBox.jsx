import './TermCheckBox.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import TermCheckBoxModal from './TermCheckBoxModal'; // 모달 컴포넌트 임포트

const TermCheckBox = ({ id, text, isModal, isChecked }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const checkHandler = (e) => {
    if (e.target.checked) {
      isChecked(+id);
    } else {
      isChecked(+id * -1);
    }
  };

  const handleIconClick = () => {
    setModalOpen(true);
  };

  return (
    <div className='term-check'>
      <div className='R-check'>
        <input type='checkbox' onChange={checkHandler} />
        <div className='privacy'>{text}</div>
      </div>

      {isModal === '1' && (
        <FontAwesomeIcon icon={faAngleDown} className='modal-icon' onClick={handleIconClick} />
      )}

      {/* 모달 표시 */}
      {modalOpen && <TermCheckBoxModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default TermCheckBox;
