import React from 'react';
import './formlayout.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const FormLayout = () => {
  return (
    <div className='form'>
      <Input
        inputId='userName'
        type={'text'}
        placeHolder={'Please enter your user name'}
        labelName='User Name'
      />
      <Input
        inputId='password'
        labelName='Password'
        type={'password'}
        placeHolder={'Please enter your password'}
      />
      <div className='button-container'>
        <Button
          className={'primary'}
          OnClick={() => alert('Clicked')}
          buttonText={'Create account'}
        />
        <Button
          className={'secondary'}
          OnClick={() => alert('Clicked Cancel')}
          buttonText={'Cancel'}
        />
      </div>
    </div>
  );
};

export default FormLayout;
