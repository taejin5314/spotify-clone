import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlaylists, selectUser } from '../../../features/userSlice';
import Header from '../../player/body/header/Header';
import './HomeBody.css'

function HomeBody({ spotify }) {
    const playlists = useSelector(selectPlaylists);

    return (
        <div className="homeBody">
            <div className="body__container">
                <Header spotify={spotify} />
            </div>

            <div className="homeBody__playlists">
                {playlists.playlists.items.map((playlist) => (
                    <img src={playlist.images[0].url} alt="" />
                ))}
            </div>
        </div>
    )
}

export default HomeBody
