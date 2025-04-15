import React from 'react'; // eslint-disable-line no-unused-vars
import './BrandStartUpFooter.css';
import logo from '../assets/brandlogofooter.png';

const BrandStartUpFooter = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        {/* 1. 로고 + 회사소개 + 언어 */}
        <div className='footer-left'>
          <img src={logo} alt='네네치킨 로고' className='footer-logo' />
          <div className='footer-links'>
            <span>회사소개</span>
            <div className='lang-switcher'>
              <button className='buttonke'>
                <span>KOR</span>
                <span className='divider'>|</span>
                <span>ENG</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. 이용약관 / 개인정보처리방침 */}
        <div className='footer-center'>
          <div className='footer-item'>
            <span className='footer-title'>이용약관</span>
            <hr />
          </div>
          <div className='footer-item'>
            <span className='footer-title'>개인정보처리방침</span>
            <hr />
          </div>
        </div>

        {/* 3. 주소 / 상호명 / 카피라이트 */}
        <div className='footer-info'>
          <p>
            COPYRIGHT 2024 BY <span className='highlight'>NENE CHICKEN.</span> ALL RIGHTS RESERVED.
          </p>
          <p>서울특별시 도봉구 노해로 391 네네빌딩 (우) 01415</p>
          <p>
            상호명 : <strong className='strong1'>(주)혜인식품</strong>
          </p>
        </div>

        {/* 4. 패밀리 사이트 버튼 */}
        <div className='footer-right'>
          <button className='family-site-button'>
            <span>Family Site</span>
            <span className='arrow-icon'>➔</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default BrandStartUpFooter;
