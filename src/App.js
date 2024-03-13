import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Button from './components/Button/Button';

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
    <div className='layout'>
      <div className='text-wrapper'>
        <h1>NickFlix</h1>
      </div>
      <Card>
        <Input type={'text'} placeHolder={'Please enter your user name'} />
        <Input type={'password'} placeHolder={'Please enter your password'} />
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
      </Card>
    </div>
  );
}

export default App;
