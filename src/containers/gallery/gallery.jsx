import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img
        src="/img1"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
      <img
        src="/img2"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
      <img
        src="/img3"
        onDragStart={handleOnDragStart}
        className="yours-custom-class"
        alt=""
      />
    </AliceCarousel>
  );
};

export default Gallery;
