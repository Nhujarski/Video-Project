import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input/Input';

function App() {
  const [user, setUser] = useState('');

  // test data const
  const dataToSend = {
    userName: 'userName2',
    password: 'userName2$',
  };
  const requestOptions = {
    method: 'POST', // HTTP method
    headers: {
      'Content-Type': 'application/json', // Specify the content type
      // Add any other headers if needed
    },
    body: JSON.stringify(dataToSend), // Convert data to JSON format
  };

  const fetchData = async () => {
    return fetch('http://localhost:3001/user/userName', requestOptions)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((data) => {
        setUser(data.userName);
      })
      .catch((error) => console.log(error));
  };
  // on render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>{user === '' ? 'loading...' : `Hi ${user}, welcome back!`}</h1>
      <Input
        placeHolder={'Please enter a user name'}
        labelText={'User Name'}
        labelId={'userName'}
      />
    </div>
  );
}

export default App;
