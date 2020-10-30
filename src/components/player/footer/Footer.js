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
import { selectSong } from '../../../features/songSlice';
import defaultSongImage from '../../../images/Spotify_Logo_RGB_White.png';
import ReactAudioPlayer from 'react-audio-player';


function Footer() {
    const selectedSong = useSelector(selectSong);

    return (
        <div className="footer">
            <div className="footer__left">
                {selectedSong ? (
                    <>
                        <img
                            className="footer__albumLogo"
                            src={selectedSong?.image}
                            alt=""
                        />
                        <div className="footer__songInfo">
                            <h4>{selectedSong?.name}</h4>
                            <p>{selectedSong?.artist}</p>
                        </div>
                    </>
                ) : (
                        <>
                            <img
                                className="footer__albumLogo"
                                src={defaultSongImage}
                                alt=""
                            />
                            <div className="footer__songInfo">
                                <h4>Spotify-clone</h4>
                                <p>Select a playlist!</p>
                            </div>
                        </>
                    )}

                <FavoriteBorderIcon fontSize="small" style={{ marginRight: "15px" }} className="footer__icon" />
                <PictureInPicture className="footer__icon" />
            </div>
            <div className="footer__center">
                <ReactAudioPlayer
                    style={{ marginLeft: "50px", outline: 'none' }}
                    src={selectedSong?.preview_url}
                    controls
                />
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
                        <div className="footer__copyright">
                            <h4>NO COPYRIGHT</h4>
                            <p>Taejin Jung's Spotify clone</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
