import React, { useEffect, useRef, useState } from 'react';
import './BannerCarousel.css';

const banners = [
  'https://product-image.kurly.com/banner/main/pc/img/7286572d-6a7e-456e-86e2-e1badc34768a.png',
  'https://product-image.kurly.com/banner/main/pc/img/f445b8b3-d597-4793-af46-3ef42f7c9a2d.jpg',
  'https://product-image.kurly.com/banner/main/pc/img/802beea0-8cc4-43a7-b3b8-c954cccb63b4.png',
  'https://product-image.kurly.com/banner/main/pc/img/9aeec3d7-2664-4c3a-a3df-f99c5889fdb8.png',
  'https://product-image.kurly.com/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg',
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="arrow left-arrow">
        &#9664;
      </button>
      <div className="carousel" ref={carouselRef}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex || (index === 0 && currentIndex === banners.length) ? 'active' : ''
            }`}
          >
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="arrow right-arrow">
        &#9654;
      </button>
    </div>
  );
};

export default BannerCarousel;
