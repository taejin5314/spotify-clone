import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, SET_USER } from './features/userSlice';

const spotify = new SpotifyWebApi();

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(userInfo => {
        // console.log(userInfo);
        dispatch(SET_USER({
          userInfo
        }))
      })
    }
    console.log('I HAVE A TOKEN>>> ', token);
  }, [window.location.hash])

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
