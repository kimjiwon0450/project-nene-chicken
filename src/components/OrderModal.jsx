import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import './OrderModal.css';

const OrderModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-box' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default OrderModal;
