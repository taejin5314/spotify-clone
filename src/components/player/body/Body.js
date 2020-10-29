import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPlaylist, selectPlaylists } from '../../../features/userSlice';
import './Body.css'
import Header from './header/Header';
import { ReactComponent as PlayButton } from '../../../images/play_button.svg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './songRow/SongRow';

function Body({ spotify }) {
    const playlist = useSelector(selectPlaylists);
    const currentPlaylist = useSelector(selectCurrentPlaylist);

    return (
        <div className="body">
            <div className="body__container">
                <Header spotify={spotify} />
            </div>

            <div className="body__info">
                {currentPlaylist ? (
                    <>
                        <img src={currentPlaylist?.playlist?.images[0]?.url} alt="playlist_image" />
                        <div className="body__infoText">
                            <h3>PLAYLIST</h3>
                            <h2>{currentPlaylist?.playlist?.name}</h2>
                            <p>{currentPlaylist?.playlist?.owner?.display_name} · <span id="body__songCount">{currentPlaylist?.playlist?.tracks?.total} Songs</span></p>
                        </div>
                    </>
                ) : (
                        <>
                            <img src={playlist?.playlists?.items[0]?.images[0]?.url} alt="playlist_image" />
                            <div className="body__infoText">
                                <h3>PLAYLIST</h3>
                                <h2>{playlist?.playlists?.items[0]?.name}</h2>
                                <p>{playlist?.playlists?.items[0]?.owner?.display_name} · <span id="body__songCount">{playlist?.playlists?.items[0]?.tracks?.total} Songs</span></p>
                            </div>
                        </>
                    )}
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <div className="body__playButton">
                        <PlayButton />
                    </div>
                    <MoreHorizIcon fontSize="large" />
                </div>

                <div className="body__contents">
                    {currentPlaylist ? (
                        <>
                            {currentPlaylist?.playlist?.tracks?.items?.map((item) => (
                                <SongRow track={item.track} />
                            ))}
                        </>
                    ) : (
                            <>

                            </>
                        )}

                </div>
            </div>
        </div>
    )
}

export default Body
