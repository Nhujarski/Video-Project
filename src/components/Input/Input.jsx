import React, { useState } from 'react';
import './input.css';

const Input = ({ placeHolder, type }) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <>
      <input
        className='form-input'
        type={type}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        value={inputVal}
        placeholder={placeHolder}></input>
    </>
  );
};

export default Input;
