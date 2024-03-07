import React, { useState } from 'react';
import './input.css';

const Input = ({ placeHolder, labelId, labelText }) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <>
      <label for=''>{labelText}</label>
      <input
        className='form-input'
        id={labelId}
        type='text'
        onChange={(e) => {
          console.log(e.target.value);
          setInputVal(e.target.value);
        }}
        value={inputVal}
        placeholder={placeHolder}></input>
    </>
  );
};

export default Input;
