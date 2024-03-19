import { useEffect, useState } from 'react';
import './App.css';
import FormLayout from './components/FormLayout/FormLayout';
import Card from './components/Card/Card';

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
        <Card>
          <FormLayout />
        </Card>
      </div>
    </div>
  );
}

export default App;
