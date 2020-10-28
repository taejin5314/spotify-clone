import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlaylists } from '../../../features/userSlice';
import './Body.css'
import Header from './header/Header';

function Body({ spotify }) {
    const playlists = useSelector(selectPlaylists);

    return (
        <div className="body">
            <div className="body__container">
                <Header spotify={spotify} />
            </div>

            <div className="body__info">
                <img src={playlists?.playlists?.items[1]?.images[0]?.url} alt="playlist_image" />
                <div className="body__infoText">
                    <h3>PLAYLIST</h3>
                    <h2>{playlists?.playlists?.items[1]?.name}</h2>
                    <p>...description</p>
                </div>
            </div>
        </div>
    )
}

export default Body
