import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlaylists } from '../../../features/userSlice';
import Header from '../../player/body/header/Header';
import './HomeBody.css';
import ReactHover, { Trigger, Hover } from 'react-hover';

function HomeBody({ spotify }) {
    const playlists = useSelector(selectPlaylists);

    const options = {
        followCursor: true,
        shiftX: -20,
        shiftY: 30
    }

    return (
        <div className="homeBody">
            <div className="body__container">
                <Header spotify={spotify} />
            </div>

            <div className="homeBody__playlists">
                {playlists?.playlists.items.map((playlist) => (
                    <div className="homebody__imageContainer">
                        <ReactHover
                            options={options}>
                            <Trigger type='trigger'>
                                <div>
                                    <img className="homeBody__images" src={playlist.images[0].url} alt="" />
                                </div>
                            </Trigger>
                            <Hover type='hover'>
                                <div className="homeBody__speechBubble">
                                    <p>Playlist:</p>
                                    <h1>{playlist.name}</h1>
                                </div>
                            </Hover>
                        </ReactHover>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeBody
