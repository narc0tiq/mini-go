import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

let DEV_URL = '';
if(process.env.NODE_ENV === 'development') {
  DEV_URL = 'http://localhost:3000';
}

function App() {
  const [ apiMessage, setApiMessage ] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${DEV_URL}/`);
      const resJson = await res.json();
      setApiMessage(resJson['message']);
    }
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>Got the message "{apiMessage}" from the API call!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
