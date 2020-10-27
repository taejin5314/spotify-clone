import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectToken, SET_TOKEN, SET_USER, SET_PLAYLISTS } from './features/userSlice';

const spotify = new SpotifyWebApi();

function App() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      dispatch(SET_TOKEN({
        token: _token
      }))

      spotify.setAccessToken(_token);

      spotify.getMe().then(userInfo => {
        // console.log(userInfo);
        dispatch(SET_USER({
          userInfo
        }))
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS({
          playlists
        }))
      })
    }
  }, [window.location.hash])

  console.log("USER: ", user);
  console.log("TOKEN: ", token)

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
