import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlaylists, SET_CURRENT_PLAYLIST } from '../../../features/userSlice';
import Header from '../../player/body/header/Header';
import './HomeBody.css';
import ReactHover, { Trigger, Hover } from 'react-hover';
import { useHistory } from 'react-router-dom';

function HomeBody({ spotify }) {
    const playlists = useSelector(selectPlaylists);
    const dispatch = useDispatch();
    const history = useHistory();


    const options = {
        followCursor: true,
        shiftX: -20,
        shiftY: 30
    };

    const onClickHandler = (id) => {
        if (id) {
            history.push(`/playlist/${id}`)
            spotify.getPlaylist(id)
                .then(playlist => {
                    dispatch(SET_CURRENT_PLAYLIST({
                        playlist,
                    }))
                })
        }
    }

    return (
        <div className="homeBody">
            <div className="body__container">
                <Header spotify={spotify} />
            </div>

            <div className="homeBody__playlists">
                {playlists?.playlists.items.map((playlist) => (
                    <div className="homebody__imageContainer"  >
                        <ReactHover
                            options={options}>
                            <Trigger type='trigger'>
                                <div>
                                    <img onClick={() => onClickHandler(playlist.id)} className="homeBody__images" src={playlist.images[0].url} alt="" />
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
