import './TermCheckBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TermCheckBox = ({ id, text, isModal, isChecked }) => {
  const checkHandler = (e) => {
    if (e.target.checked) {
      isChecked(+id);
    } else {
      isChecked(+id * -1);
    }
  };

  return (
    <div className='term-check'>
      <div className='R-check'>
        <input type='checkbox' onChange={checkHandler} />
        <div className='privacy'> {text} </div>
      </div>
      {isModal === '1' && <FontAwesomeIcon icon={faAngleDown} />}
    </div>
  );
};

export default TermCheckBox;
