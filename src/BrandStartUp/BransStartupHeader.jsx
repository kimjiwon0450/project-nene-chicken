import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import './BransStartupHeader.css';
import logo from '../assets/brandlogo.png';
import eng from '../assets/brandeng.png';
import { useNavigate } from 'react-router';

const BransStartupHeader = () => {
  const [activeMenu, setActiveMenu] = useState('창업 센터');
  const navi = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const homeRouteHandler = () => {
    navi('/');
  };

  return (
    <div className='HeaderWrap'>
      {/* 상단 메뉴 */}
      <div className='TopNav'>
        <div className='TopLeft'>
          <div className='top-item'>주문</div>
          <div className='top-item active'>창업</div>
          <div className='top-item'>브랜드소개</div>
        </div>
        <div className='TopRight'>
          <div className='lang-icon'>
            <img src={eng} alt='language' />
          </div>
        </div>
      </div>
      {/* 구분선 */}
      <div className='divider' />
      {/* 하단 메뉴 */}
      <div className='HMainBox'>
        <div className='BottomLogoWrap' onClick={homeRouteHandler}>
          <img src={logo} alt='logo' />
        </div>
        <div className='MenuWrap'>
          <div className='MainMenu'>
            {['브랜드 스토리', '창업 센터', '뉴스 미디어'].map((menu) => (
              <div
                key={menu}
                className={`menu-item ${activeMenu === menu ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
        <div className='OrderButton'>🍗 네네치킨 주문하기</div>
      </div>
    </div>
  );
};

export default BransStartupHeader;
