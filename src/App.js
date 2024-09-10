import { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginFormLayout from './components/LoginFormLayout/LoginFormLayout';
import SignUpFormLayout from './components/SignUpFormLayout.jsx/SignUpFormLayout';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

import './App.css';

function App() {
  const [user, setUser] = useState('');

  // test data const
  // userName: 'userName2',
  //     password: 'userName2$',

  const onSubmit = async (userName, password) => {
    const dataToSend = {
      userName: userName,
      password: password,
    };
    const requestOptions = {
      method: 'POST', // HTTP method
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        // Add any other headers if needed
      },
      body: JSON.stringify(dataToSend), // Convert data to JSON format
    };
    return fetch('http://localhost:3001/user/userName', requestOptions)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((data) => {
        setUser(data.userName);
        console.log({ user });
      })
      .catch((error) => console.log(error));
  };
  // on render

  return (
    <div className='layout'>
      <BrowserRouter>
        <div className='text-wrapper'>
          <Header text={user ? `Welcome, ${user}` : 'NickFlix'} />
          {/** added route for signup and login*/}
          <Routes>
            <Route
              exact
              path='/login'
              element={
                <Card size='large'>
                  <LoginFormLayout onSubmit={onSubmit} />
                </Card>
              }
            />
            <Route
              path='/'
              element={
                <Carousel
                  media={[
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                    <img
                      src='/logo192.png'
                      alt='test react logo img'
                      width='100'
                      height='100'
                    />,
                  ]}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
