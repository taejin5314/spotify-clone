import React from 'react';
import './Sidebar.css';
import logo from '../../../images/Spotify_Logo_RGB_White.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logo} alt="Spotify Logo" />
        </div>
    )
}

export default Sidebar
