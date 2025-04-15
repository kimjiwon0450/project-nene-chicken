import React, { useState } from 'react';
import './MyPageOrderBox.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMenu } from '../../context/MenuContext';

const MyPageOrderBox = () => {
  const [selectDate, setSelectDate] = useState(1);
  const { orderIsValid } = useMenu();
  return (
    <div className='order-box'>
      <div className='inner-box'>
        <form>
          <div className='datatab'>
            <div
              className={'tab 1D' + (selectDate === 1 ? ' on' : '')}
              onClick={() => setSelectDate(1)}
            >
              오늘
            </div>
            <div
              className={'tab 1W' + (selectDate === 2 ? ' on' : '')}
              onClick={() => setSelectDate(2)}
            >
              일주일
            </div>
            <div
              className={'tab 1M' + (selectDate === 3 ? ' on' : '')}
              onClick={() => setSelectDate(3)}
            >
              1개월
            </div>
            <div
              className={'tab 3M' + (selectDate === 4 ? ' on' : '')}
              onClick={() => setSelectDate(4)}
            >
              3개월
            </div>
          </div>
        </form>
        <div className='order-content'>
          <div className='content-none'>
            <img src='https://nenechicken.com/images/orderNone.png' alt='' className='none-img' />
            <p className='name-title'>주문 내역이 없습니다.</p>
            {orderIsValid && (
              <div className='btn-add-order'>
                <FontAwesomeIcon icon={faPlus} />
                주문하러 가기
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageOrderBox;
