import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ReactComponent as PictureInPicture } from '../../../images/picture-in-picture.svg'
import { useSelector } from 'react-redux';
import { selectCurrentPlaylist, selectPlaylists } from '../../../features/userSlice';


function Footer() {
    const playlists = useSelector(selectPlaylists);
    const currentPlaylist = useSelector(selectCurrentPlaylist);

    return (
        <div className="footer">
            <div className="footer__left">
                {currentPlaylist ? (
                    <>
                        <img
                            className="footer__albumLogo"
                            src={currentPlaylist?.playlist?.images[0]?.url}
                            alt=""
                        />
                        <div className="footer__songInfo">
                            <h4>Yeah!</h4>
                            <p>User</p>
                        </div>
                    </>
                ) : (
                        <>
                            <img
                                className="footer__albumLogo"
                                src={playlists?.playlists?.items[1]?.images[0]?.url}
                                alt=""
                            />
                            <div className="footer__songInfo">
                                <h4>Yeah!</h4>
                                <p>User</p>
                            </div>
                        </>
                    )}

                <FavoriteBorderIcon fontSize="small" style={{ marginRight: "15px" }} className="footer__icon" />
                <PictureInPicture className="footer__icon" />
            </div>
            <div className="footer__center">
                <div className="footer__centerTop">
                    <ShuffleIcon className="footer__icon" />
                    <SkipPreviousIcon className="footer__icon" />
                    <PlayCircleOutlineIcon fontSize="large" className="footer__playerIcon" />
                    <SkipNextIcon className="footer__icon" />
                    <RepeatIcon className="footer__icon" />
                </div>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__icon" />
                    </Grid>
                    <Grid item>
                        <DevicesIcon fontSize="small" className="footer__icon" />
                    </Grid>
                    <Grid item>
                        <VolumeUpIcon />
                    </Grid>
                    <Grid item>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
