import React, { useState } from 'react';
import './button.css';

const Button = ({ buttonText, OnClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={OnClick}>
      {buttonText}
    </button>
  );
};

export default Button;
