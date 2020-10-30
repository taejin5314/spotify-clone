import React from 'react';
import './SongRow.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { selectSong, SET_SONG } from '../../../../features/songSlice';


function SongRow({ track, index, added_at }) {
    const artist = track.artists.map((artist) => artist.name).join(', ');
    const dispatch = useDispatch();

    const playSelectedSong = (e) => {
        e.preventDefault();
        // console.log(track.name);
        // console.log(artist);
        // console.log(track.album.images[0].url);
        // console.log(track.preview_url)

        dispatch(SET_SONG({
            name: track.name,
            artist: artist,
            image: track.album.images[0].url,
            preview_url: track.preview_url,
        }))
    }

    return (
        <div className="songRow" onClick={playSelectedSong} >
            <div className="songRow__title">
                <p className="songRow__index">{index + 1}</p>
                <img className="songRow__album" src={track.album.images[0].url} alt="" />
                <div className="songRow__songTitle">
                    <h1 className="songRow__songName">{((track.name).length > 20) ?
                        (((track.name).substring(0, 20 - 3)) + '...') :
                        track.name}</h1>
                    <p className="songRow__songArtist">
                        {((artist).length > 20) ?
                            (((artist).substring(0, 20 - 3)) + '...') :
                            artist}
                    </p>
                </div>
            </div>
            <p className="songRow__songAlbum">
                {((track.album.name).length > 18) ?
                    (((track.album.name).substring(0, 18 - 3)) + '...') :
                    track.album.name}
            </p>

            <p className="songRow__songAdded">{moment(added_at).fromNow()}</p>

            <div className="songRow__right">
                <FavoriteBorderIcon className="songRow__favoriteIcon" />

                <p className="songRow__songDuration">{moment.duration(track.duration_ms).minutes()}:{(moment.duration(track.duration_ms).seconds() < 10) ? "0" + moment.duration(track.duration_ms).seconds() : moment.duration(track.duration_ms).seconds()}</p>

                <MoreHorizIcon className="songRow__moreIcon" />
            </div>

        </div>
    )
}

export default SongRow
