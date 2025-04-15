import React from 'react'; // eslint-disable-line no-unused-vars
import './ChickenFooter.css';
import logo from '../assets/footerlogo.png';
import location from '../assets/footerlocation.png';
import city from '../assets/footercity.png';
import call from '../assets/footercall.png';
import mail from '../assets/footermail.png';
import right from '../assets/right.png';

const ChickenFooter = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Left Section - 1번째 */}
        <div className='footer-left'>
          <div className='logo'>
            <img src={logo} alt='네네치킨 로고' />
          </div>

          <div className='copyright'>
            COPYRIGHT 2024 BY <span className='highlight'>NENECHICKEN.</span>
            <br />
            ALL RIGHTS RESERVED.
          </div>

          <div className='language-container'>
            <span className='company-intro'>회사소개</span>
            <div className='lang-select'>
              <span className='lang-option'>KOR</span>
              <span className='lang-divider'>|</span>
              <span className='lang-option'>ENG</span>
            </div>
          </div>
        </div>

        {/* Middle Section - 2번째 */}
        <div className='footer-middle'>
          {/* Footer Links */}
          <div className='footer-links-container'>
            <div className='footer-links-row'>
              <a href='#' className='footer-link'>
                이용약관
              </a>
              <a href='#' className='footer-link'>
                개인정보처리방침
              </a>
            </div>
            <div className='footer-links-row'>
              <a href='#' className='footer-link'>
                위치정보이용약관
              </a>
              <a href='#' className='footer-link'>
                이메일무단수집거부
              </a>
            </div>
          </div>
        </div>

        {/* Company Info Section - 3번째 (새로운 섹션) */}
        <div className='company-info-section'>
          {/* 주소와 오시는길 버튼 - 서울특별시의 '서'에 맞게 정렬 */}
          <div className='info-row address'>
            <span className='icon-wrapper'>
              <img src={location} alt='위치 아이콘' />
            </span>
            <div className='info-text'>
              <div className='address-text'>
                서울특별시 도봉구 노해로 391
                <br />
                네네빌딩 (우) 01415
              </div>
              <a href='#' className='map-btn'>
                오시는길{' '}
                <span>
                  <img src={right} alt='화살표 아이콘' />
                </span>
              </a>
            </div>
          </div>

          {/* 상호명 정보 - 한 줄로 정렬 */}
          <div className='info-row'>
            <span className='icon-wrapper'>
              <img src={city} alt='회사 아이콘' />
            </span>
            <div className='info-inline'>
              <span className='info-label'>상호명</span>
              <span className='info-value'>(주)혜인식품</span>
            </div>
          </div>

          {/* 사업자등록번호 - 한 줄로 정렬, 상호명과 동일한 정렬 */}
          <div className='info-row'>
            <div className='company-info-with-margin info-inline'>
              <span className='info-label'>사업자등록번호</span>
              <span className='info-value'>127-81-96998</span>
            </div>
          </div>

          {/* 대표자 - 한 줄로 정렬, 상호명과 동일한 정렬 */}
          <div className='info-row'>
            <div className='company-info-with-margin info-inline'>
              <span className='info-label'>대표자</span>
              <span className='info-value'>현철호, 현광식</span>
            </div>
          </div>
        </div>

        {/* Right Section - 4번째 */}
        <div className='footer-right'>
          <div className='phone-order-box'>
            <div className='contact-label1'>전화주문</div>
            <div className='contact-value'>1599-4479</div>
          </div>

          {/* 고객센터 */}
          <div className='contact-row'>
            <span className='icon-wrapper'>
              <img src={call} alt='전화 아이콘' />
            </span>
            <div className='contact-info'>
              <span className='contact-label'>고객센터</span>
              <span className='contact-value-normal'>02-930-6665</span>
            </div>
          </div>

          {/* 업무시간 - 고객센터의 '고'에 맞춰 정렬 */}
          <div className='contact-row'>
            <div className='contact-with-margin business-hours'>
              <span className='contact-label'>업무시간</span>
              <span className='contact-value-normal'>
                09 ~ 18시 / <span className='lunch-time'>점심시간</span> 12 ~ 13시
              </span>
            </div>
          </div>

          {/* 이메일 - 고객센터의 '고'에 맞춰 정렬 */}
          <div className='contact-row'>
            <span className='icon-wrapper'>
              <img src={mail} alt='이메일 아이콘' />
            </span>
            <div className='contact-value-normal1'>cs@nenechicken.com</div>
          </div>

          <a href='#' className='inquiry-btn'>
            1:1 문의
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ChickenFooter;
