import React from 'react';
import './Login.css';
import logo from '../../images/Spotify_Logo_RGB_White.png'

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="Logo" />
            <a href="#">LOG IN</a>
        </div>
    )
}

export default Login
