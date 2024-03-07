import React from 'react';
import './card.css';

const Card = ({ children }) => {
  return <div className='card-body'>{children}</div>;
};

export default Card;
