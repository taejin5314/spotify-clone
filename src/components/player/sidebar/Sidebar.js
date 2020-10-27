import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../../images/Spotify_Logo_RGB_White.png';
import SidebarOption from './sidebarOption/SidebarOption';
import { ReactComponent as Home } from '../../../images/home.svg';
import { ReactComponent as Search } from '../../../images/search.svg';
import { ReactComponent as Library } from '../../../images/library.svg'

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logo} alt="Spotify Logo" />
            <ul className="sidebar__option">
                <li className="sidebar__optionList" onClick={(e) => e.currentTarget.classList.toggle("selected")}>
                    <SidebarOption Icon={Home} title="Home" />
                </li>
                <li className="sidebar__optionList" onClick={(e) => e.currentTarget.classList.toggle("selected")}>
                    <SidebarOption Icon={Search} title="Search" />
                </li>
                <li className="sidebar__optionList" onClick={(e) => e.currentTarget.classList.toggle("selected")}>
                    <SidebarOption Icon={Library} title="Your Library" />
                </li>
            </ul>
            <br />
            <stong className="sidebar__title">PLAYLISTS</stong>
            <hr />

        </div>
    )
}

export default Sidebar
