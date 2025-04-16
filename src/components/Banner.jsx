import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import './Banner.css';

const Banner = () => {
  const images = [
    '../assets/banner1.jpg', // 첫 번째 이미지
    '../assets/banner2.jpg', // 두 번째 이미지
    '../assets/banner3.jpg', // 세 번째 이미지
  ];

  // 슬라이드 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 효과 (3초마다 이미지 변경)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 슬라이드

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  // 이전 슬라이드
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 다음 슬라이드
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className='banner'>
      <div className='banner'>
        <div className='banner__image-container'>
          <img src={images[currentIndex]} alt='네네치킨 배너' className='banner__image' />
        </div>

        {/* 이전 버튼 */}
        <button className='banner__prev' onClick={goToPreviousSlide}>
          &#10094; {/* 왼쪽 화살표 */}
        </button>

        {/* 다음 버튼 */}
        <button className='banner__next' onClick={goToNextSlide}>
          &#10095; {/* 오른쪽 화살표 */}
        </button>
      </div>
    </section>
  );
};

export default Banner;
