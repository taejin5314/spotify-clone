import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      setToken(_token)
    }
    console.log('I HAVE A TOKEN>>> ', token);
  }, [window.location.hash])

  return (
    <div className="app">
      {
        token ? (
          <p>I am logged in</p>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
