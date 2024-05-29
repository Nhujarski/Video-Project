import React, { useState } from 'react';
import './loginformlayout.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const LoginFormLayout = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='form'>
      <Input
        inputId='userName'
        type={'text'}
        placeHolder={'Please enter your user name'}
        labelName='User Name'
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        inputId='password'
        labelName='Password'
        type={'password'}
        placeHolder={'Please enter your password'}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className='button-container'>
        <Button
          className={'primary'}
          OnClick={() => {
            onSubmit(userName, password);
            setUserName('');
            setPassword('');
          }}
          buttonText={'Login'}
        />
        <Button
          className={'secondary'}
          OnClick={() => alert('Clicked Cancel')}
          buttonText={'Cancel'}
        />
      </div>
      <p className='signup-link'>
        Don't have an account? Click here to sign up!
      </p>
    </div>
  );
};

export default LoginFormLayout;
