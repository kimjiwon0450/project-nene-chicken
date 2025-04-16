import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import './MenuSection.css';
import m30001 from '../assets/30001.jpg';
import m30063 from '../assets/30063.jpg';
import m30013 from '../assets/30013.jpg';
import m30038 from '../assets/30038.jpg';
import m6086 from '../assets/6086.jpg';
import m3813 from '../assets/3813.jpg';
import m30002 from '../assets/30002.jpg';
import m30005 from '../assets/30005.jpg';
import m30415 from '../assets/30415.jpg';
import m1030 from '../assets/1030.jpg';

const products = [
  {
    id: 1,
    name: '후라이드',
    description: '겉은 바삭하고 속은 부드러운 네네치킨 대표 메뉴',
    price: '19,000원',
    image: m30001,
  },
  {
    id: 2,
    name: '오리엔탈파닭',
    description: '새콤달콤 짭조름한 오리엔탈 소스에 신선한 파가 듬뿍',
    price: '22,000원',
    image: m30063,
  },
  {
    id: 3,
    name: '양념치킨',
    description: '매콤달콤한 맛의 네네치킨 대표 양념치킨',
    price: '21,000원',
    image: m30013,
  },
  {
    id: 4,
    name: '치즈스노윙',
    description: '입 안에서 사르르 녹는 스노윙 치즈',
    price: '22,000원',
    image: m30038,
  },
  {
    id: 5,
    name: '스노윙MAXX',
    description: '매콤달콤한 스노윙MAXX치킨과 달콤향긋한 찍어바요딥핑소스의 완벽한 조화',
    price: '23,000원',
    image: m6086,
  },
  {
    id: 6,
    name: '청양마요치킨',
    description: '아삭한 양파와 매콤한 청양마요소스 맛의 대조화!',
    price: '22,000원',
    image: m3813,
  },
  {
    id: 7,
    name: '핫후라이드',
    description: '겉은 바삭하고 속살은 부드러운 네네치킨 대표메뉴',
    price: '20,000원',
    image: m30002,
  },
  {
    id: 8,
    name: '닭다리(10개)',
    description: '푸짐하고 쫄깃한 닭다리로 만든 후라이드 닭다리',
    price: '23,000원',
    image: m30005,
  },
  {
    id: 9,
    name: '소이갈릭치킨',
    description: '짭조름한 소이갈릭치킨',
    price: '22,000원',
    image: m30415,
  },
  {
    id: 10,
    name: '콤보(닭다리반(5개)+날개반(6개))',
    description:
      '닭다리의 담백함과 날개의 바삭함을 한번에! 두 가지 매력을 동시에 맛볼 수 있는 완벽한 치킨 메뉴',
    price: '23,000원',
    image: m1030,
  },
];

const VISIBLE_COUNT = 5;

const MenuSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + VISIBLE_COUNT >= products.length ? prev : prev + 1));
  };

  return (
    <div className='MenuSlider'>
      <div className='slider-container'>
        <h2 className='title'>BEST</h2>
        <div className='slider-wrapper'>
          <button onClick={handlePrev} className='nav-button'>
            ←
          </button>
          <div className='slider-window'>
            <div
              className='slider-track'
              style={{
                transform: `translateX(-${startIndex * 200}px)`,
              }}
            >
              {products.map((product, index) => (
                <div className='product-card' key={index}>
                  <img src={product.image} alt={product.name} />
                  <div className='MenuInfo'>
                    <h3>{product.name}</h3>
                    <p className='description'>{product.description}</p>
                    <p className='price'>{product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className='nav-button'>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
