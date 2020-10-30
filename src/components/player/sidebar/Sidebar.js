import React from 'react';
import './Sidebar.css';
import logo from '../../../images/Spotify_Logo_RGB_White.png';
import SidebarOption from './sidebarOption/SidebarOption';
import { ReactComponent as Home } from '../../../images/home.svg';
import { ReactComponent as Search } from '../../../images/search.svg';
import { ReactComponent as Library } from '../../../images/library.svg'
import { useSelector } from 'react-redux';
import { selectPlaylists } from '../../../features/userSlice';
import { useHistory } from 'react-router-dom';

function Sidebar({ spotify }) {
    const playlists = useSelector(selectPlaylists);
    const history = useHistory();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logo} alt="Spotify Logo" onClick={() => history.push('/home')} />
            <ul className="sidebar__option">
                <li className="sidebar__optionList" onClick={() => history.push('/')}>
                    <SidebarOption Icon={Home} title="Home" />
                </li>
                <li className="sidebar__optionList" onClick={() => history.push('/search')}>
                    <SidebarOption Icon={Search} title="Search" />
                </li>
                <li className="sidebar__optionList" onClick={() => history.push('/library')}>
                    <SidebarOption Icon={Library} title="Your Library" />
                </li>
            </ul>
            <br />
            <stong className="sidebar__title">PLAYLISTS</stong>
            <hr />

            {playlists?.playlists?.items?.map(playlist => (
                <SidebarOption key={playlist?.id} title={playlist?.name} playlistId={playlist?.id} spotify={spotify} />
            ))}

        </div>
    )
}

export default Sidebar
