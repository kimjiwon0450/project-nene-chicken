import React, { useEffect, useState } from 'react';
import './ServiceBoxes.css';

function ServiceBoxes() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트에 따라 버튼 보이기 여부 업데이트
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 부드럽게 최상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div className='SubBannerWrap'>
        <div className='SubBanner'>
          <div className='SbanBox color1 Cpointer'>
            <span>
              가까운 네네치킨 매장을
              <br /> 찾아보세요
            </span>
            <img src='/find-store.png' className='find-store' alt='네네치킨 매장찾기' />
          </div>
          <div className='SbanBox color2 Cpointer'>
            <span>
              모바일교환권/금액권으로 마음을
              <br /> 선물하세요
            </span>
            <img src='/gift.png' className='gift' alt='선물하기' />
          </div>
          <div className='SbanBox color3 Cpointer'>
            <span>
              다양한 이벤트 재미를
              <br /> 경험해보세요!
            </span>
            <img src='/event.png' className='event' alt='이벤트정보보기' />
          </div>
        </div>
      </div>

      <div className='SubProcess'>
        <div className='ProcessBox'>
          <div className='ProcessList'>
            <div>
              <img src='/delivery.png' alt='배달주문' />
            </div>
            <div className='PS_title'>
              <div className='tBox'>
                <div style={{ flex: 1 }}>
                  <span className='PStype'>배달</span>주문
                </div>
                <span className='ticon' />
                <img src='/icon_subLeft.svg' alt='' />
              </div>
            </div>
            <div className='PS_Stitle'>원하는 곳에서 받아 보세요</div>
          </div>

          <div className='ProcessList'>
            <div>
              <img src='/take-out.png' alt='포장주문' />
            </div>
            <div className='PS_title'>
              <div className='tBox'>
                <div style={{ flex: 1 }}>
                  <span className='PStype'>포장</span>주문
                </div>
                <span className='ticon' />
                <img src='/icon_subLeft.svg' alt='' />
              </div>
            </div>
          </div>

          <div className='ProcessList quick'>
            <div>
              <img src='/quick-order.png' alt='퀵오더' />
            </div>
            <div className='PS_title'>
              <div className='tBox'>
                <div style={{ flex: 1 }}>
                  <span className='PStype'>퀵</span>오더
                </div>
                <span className='ticon' />
                <img src='/icon_subLeft.svg' alt='' />
              </div>
            </div>
            {/* PS_title 닫는 태그 추가 */}
            <div className='PS_Stitle'>
              자주 주문하는 메뉴를 <br />
              빠르게 주문해요
            </div>
          </div>
        </div>
      </div>

      <div id='btnTop'>
        {isVisible && (
          <button onClick={scrollToTop} className='scroll-button'>
            ▲
          </button>
        )}
      </div>
    </>
  );
}

export default ServiceBoxes;
