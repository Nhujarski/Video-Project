import React from 'react';
import Card from '../Card/Card';
import './carousel.css';

const Carousel = ({ media }) => {
  return (
    <div className='carousel-container'>
      {media.map((item) => (
        <Card size='small'>{item}</Card>
      ))}
    </div>
  );
};

export default Carousel;
