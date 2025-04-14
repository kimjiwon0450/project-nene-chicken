import './TermCheckBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TermCheckBox = ({ text, isModal }) => {
  return (
    <div className='term-check'>
      <div className='R-check'>
        <input type='checkbox' />
        <div className='privacy'> {text} </div>
      </div>
      {isModal === '1' && <FontAwesomeIcon icon={faAngleDown} />}
    </div>
  );
};

export default TermCheckBox;
