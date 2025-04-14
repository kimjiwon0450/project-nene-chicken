// Footer.jsx
import React from 'react'; // eslint-disable-line no-unused-vars
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        {/* Logo Placeholder */}
        <div className='icon-placeholder'>이미지 넣어!</div>
        <p>
          COPYRIGHT 2024 BY <span className='highlight'>NENECHICKEN</span>.<br />
          ALL RIGHTS RESERVED.
        </p>
        <div className='language-switch'>
          <span>회사소개</span>
          <button>KOR</button>
          <span>|</span>
          <button>ENG</button>
        </div>
      </div>

      <div className='footer-middle'>
        <ul>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>위치정보이용약관</li>
          <li>이메일무단수집거부</li>
        </ul>
      </div>

      <div className='footer-right'>
        <div className='address'>
          <div className='icon-placeholder'>이미지 넣어!</div>
          <p>
            서울특별시 도봉구 노해로 391
            <br />
            네네빌딩 (우) 01415
          </p>
          <button className='btn-map'>오시는길 →</button>
        </div>
        <div className='company-info'>
          <div className='icon-placeholder'>이미지 넣어!</div>
          <p>상호명 (주)혜인식품</p>
          <p>사업자등록번호 127-81-96998</p>
          <p>대표자 현철호, 현광식</p>
        </div>
        <div className='contact'>
          <div>
            <div className='icon-placeholder'>이미지 넣어!</div>
            <p className='phone-label'>전화주문</p>
            <p className='phone-number'>1599-4479</p>
          </div>
          <div>
            <div className='icon-placeholder'>이미지 넣어!</div>
            <p>고객센터 02-930-6665</p>
            <p>업무시간 09 ~ 18시 / 점심시간 12 ~ 13시</p>
            <p>
              <a href='mailto:cs@nenechicken.com'>cs@nenechicken.com</a>
            </p>
            <button className='btn-inquiry'>1:1 문의</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
