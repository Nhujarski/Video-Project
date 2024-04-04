import React from 'react';
import './header.css';

const Header = ({ text }) => {
  return (
    <div className='header-wrapper'>
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
