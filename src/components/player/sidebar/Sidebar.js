import React from 'react';
import './Sidebar.css';
import logo from '../../../images/Spotify_Logo_RGB_White.png';
import SidebarOption from './sidebarOption/SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logo} alt="Spotify Logo" />
            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your Library" />
        </div>
    )
}

export default Sidebar
