import React from 'react';
import './input.css';

const Input = ({ placeHolder, type, labelName, inputId, onChange, Value }) => {
  return (
    <div className='input-wrapper'>
      <label for={inputId}>{labelName}</label>
      <input
        id={inputId}
        className='form-input'
        type={type}
        placeholder={placeHolder}
        value={Value}
        onChange={onChange}></input>
    </div>
  );
};

export default Input;
