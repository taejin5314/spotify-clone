import React from 'react';
import './Login.css';
import logo from '../../images/Spotify_Logo_RGB_White.png'
import { loginURL } from '../../spotify';

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="Logo" />
            <a href={loginURL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
