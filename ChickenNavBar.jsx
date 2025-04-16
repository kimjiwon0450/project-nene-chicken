import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import './ChickenNavBar.css';
import OrderModal from './OrderModal';

// 아이콘 이미지 import
import MapPinIcon from '../assets/ping.png';
import UserIcon from '../assets/user.png';
import CartIcon from '../assets/cart.png';
import LogoImage from '../assets/logo.png'; // ✅ 로고 이미지 import
import RiderIcon from '../assets/rider.png';
import StoreIcon from '../assets/store.png';
import CancelIcon from '../assets/cancel.png';

function ChickenNavBar() {
  const mainMenuItems = ['주문', '메뉴', '쿠폰 사용하기', '선물하기', '매장안내', '이벤트/공지'];
  const topMenuItems = ['홈', '창업', '브랜드소개'];
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/'; // ✅ 로고 클릭 시 홈으로 이동
  };

  const handleMainMenuClick = (item) => {
    if (item === '주문') {
      setModalOpen(true); // ✅ '주문' 클릭 시 모달 열기
    }
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
            <button
              key={index}
              className='main-menu-item'
              onClick={() => handleMainMenuClick(item)} // ✅ 메뉴 클릭 핸들러 연결
            >
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

      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <div className='model-cancel-button'>
            <a onClick={() => setModalOpen(false)}>
              <img src={CancelIcon} alt='취소 아이콘' />
            </a>
          </div>
          <h1>100% 국내산 닭고기</h1>
          <h1>맛있는 네네치킨</h1>
          <h2>배달/포장을 선택해주세요</h2>

          {/* ✅ 버튼을 감싸는 래퍼 */}
          <div className='modal-buttons'>
            <button onClick={() => setModalOpen(false)}>
              <img src={RiderIcon} alt='라이더 아이콘' />
              <h1>배달주문 &gt; </h1>
            </button>
            <button onClick={() => setModalOpen(false)}>
              <img src={StoreIcon} alt='매장 아이콘' />
              <h1>포장주문 &gt; </h1>
            </button>
          </div>
        </div>
      </OrderModal>
    </div>
  );
}

export default ChickenNavBar;
