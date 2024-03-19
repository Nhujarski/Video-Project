import React, { useState } from 'react';
import './input.css';

const Input = ({ placeHolder, type, labelName, inputId }) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div className='input-wrapper'>
      <label for={inputId}>{labelName}</label>
      <input
        id={inputId}
        className='form-input'
        type={type}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        value={inputVal}
        placeholder={placeHolder}></input>
    </div>
  );
};

export default Input;
