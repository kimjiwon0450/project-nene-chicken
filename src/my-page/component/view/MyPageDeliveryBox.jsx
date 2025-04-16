import React from 'react';
import './MyPageDeliveryBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faPlus } from '@fortawesome/free-solid-svg-icons';

const MyPageDeliveryBox = () => {
  return (
    <div className='delivery-box'>
      <div className='delivery-wrap'>
        <div className='address-wrap'>
          <div className='add-btn-box'>
            <span className='btn-now'>
              <FontAwesomeIcon icon={faCrosshairs} />
              현재위치로 주소등록
            </span>
            <span className='btn-add'>
              <FontAwesomeIcon icon={faPlus} />
              배송주소등록
            </span>
          </div>
          <div className='address-box'>
            <div className='add-wrap'>
              <div className='add-box'>
                <div className='add-content'>
                  <div className='Daddress'>
                    <div className='title'>
                      <span className='title-span'>
                        <img src='https://nenechicken.com/images/icon_location_home.svg' alt='' />
                        <span>집</span>
                      </span>
                    </div>
                    <div className='sub-title'>
                      <span className='add-none'>등록된 주소가 없습니다. 주소를 설정하세요.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='add-wrap'>
              <div className='add-box'>
                <div className='add-content'>
                  <div className='Daddress'>
                    <div className='title'>
                      <span className='title-span'>
                        <img
                          src='https://nenechicken.com/images/icon_location_company.svg'
                          alt=''
                        />
                        <span>회사</span>
                      </span>
                    </div>
                    <div className='sub-title'>
                      <span className='add-none'>등록된 주소가 없습니다. 주소를 설정하세요.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageDeliveryBox;
