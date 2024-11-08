import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from "../assets/image1.avif"
import image2 from "../assets/image2.avif"
import image3 from "../assets/image3.avif"


const images = [
  image1,
  image2,
  image3
]


const CarouselPage = () => {
  return (
    <Carousel
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    useKeyboardArrows
    autoPlay
    interval={3000}
    swipeable
  >
    {images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slide ${index}`} />
      </div>
    ))}
  </Carousel>
  );
};
export default CarouselPage