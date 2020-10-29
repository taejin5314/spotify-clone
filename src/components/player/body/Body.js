import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPlaylist, selectPlaylists } from '../../../features/userSlice';
import './Body.css'
import Header from './header/Header';
import { ReactComponent as PlayButton } from '../../../images/play_button.svg';
import { ReactComponent as Clock } from '../../../images/clock.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './songRow/SongRow';

function Body({ spotify }) {
    const playlist = useSelector(selectPlaylists);
    const currentPlaylist = useSelector(selectCurrentPlaylist);
    return (
        <div className="body">

            <div className="body__helper">
                <div className="body__container">
                    <Header spotify={spotify} />
                </div>

                <div className="body__info">
                    {currentPlaylist ? (
                        <>
                            <img src={currentPlaylist?.playlist?.images[0]?.url} alt="playlist_image" />
                            <div className="body__infoText">
                                <h3>PLAYLIST</h3>
                                <h2>
                                    {((currentPlaylist?.playlist?.name).length > 15) ?
                                        (((currentPlaylist?.playlist?.name).substring(0, 15 - 3)) + '...') :
                                        currentPlaylist?.playlist?.name}
                                    {}
                                </h2>
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
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <div className="body__playButton">
                        <PlayButton />
                    </div>
                    <FavoriteIcon className="body__favIcon" fontSize="large" />
                    <MoreHorizIcon className="body__moreIcon" fontSize="large" />
                </div>

                <div className="body__contents">
                    <div className="body__separator">
                        <p className="body__nameIndex"># &ensp;  Name</p>
                        <p className="body__albumIndex">Album</p>
                        <p className="body__addedIndex">Added</p>
                        <Clock style={{ marginRight: "30px" }} />
                    </div>
                    {currentPlaylist ? (
                        <>
                            {currentPlaylist?.playlist?.tracks?.items?.map((item, index) => (
                                <SongRow track={item.track} added_at={item.added_at} index={index} />
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
