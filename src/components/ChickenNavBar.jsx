import React from 'react'; // eslint-disable-line no-unused-vars
import './ChickenNavBar.css';

// 아이콘 이미지 import
import MapPinIcon from '../assets/ping.png';
import UserIcon from '../assets/user.png';
import CartIcon from '../assets/cart.png';
import LogoImage from '../assets/logo.png'; // ✅ 로고 이미지 import

function ChickenNavBar() {
  const mainMenuItems = ['주문', '메뉴', '쿠폰 사용하기', '선물하기', '매장안내', '이벤트/공지'];
  const topMenuItems = ['홈', '창업', '브랜드소개'];

  const handleLogoClick = () => {
    window.location.href = '/'; // ✅ 로고 클릭 시 홈으로 이동
  };

  return (
    <div className='nav-container'>
      {/* 상단 네비게이션 */}
      <div className='top-nav'>
        <div className='top-nav-left'>
          {topMenuItems.map((item, index) => (
            <button key={index} className={`top-nav-item ${index === 0 ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </div>

        {/* 배달 위치 */}
        <div className='delivery-location'>
          <img src={MapPinIcon} alt='배달 위치 아이콘' className='location-icon' />
          <span className='location-text'>어디로 배달해 드릴까요?</span>
        </div>

        <div className='top-nav-right'>
          <button className='login-button'>로그인</button>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <div className='main-nav'>
        {/* 로고 공간 */}
        <div className='logo-container' onClick={handleLogoClick}>
          <img src={LogoImage} alt='로고' className='logo-image' />
        </div>

        {/* 메뉴 아이템들 */}
        <div className='main-menu'>
          {mainMenuItems.map((item, index) => (
            <button key={index} className='main-menu-item'>
              {item}
            </button>
          ))}
        </div>

        {/* 계정 및 장바구니 아이콘 */}
        <div className='nav-icons'>
          <button className='icon-button user-icon'>
            <img src={UserIcon} alt='사용자 아이콘' />
          </button>
          <button className='icon-button cart-icon'>
            <img src={CartIcon} alt='장바구니 아이콘' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChickenNavBar;
