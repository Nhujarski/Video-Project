import { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import LoginFormLayout from './components/LoginFormLayout/LoginFormLayout';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
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
      <div className='text-wrapper'>
        <Header text={user ? `Welcome, ${user}` : 'NickFlix'} />
        <Card>
          <LoginFormLayout onSubmit={onSubmit} />
        </Card>
      </div>
    </div>
  );
}

export default App;
