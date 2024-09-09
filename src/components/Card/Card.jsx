import React from 'react';
import './card.css';

const Card = ({ children, size }) => {
  return <div className={`card-body-${size}`}>{children}</div>;
};

export default Card;
