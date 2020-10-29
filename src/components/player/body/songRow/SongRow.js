import React from 'react';
import './SongRow.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


function SongRow({ track, index, added_at }) {
    const artist = track.artists.map((artist) => artist.name).join(', ');

    return (
        <div className="songRow">
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

            <p className="songRow__songDuration">{moment.duration(track.duration_ms).minutes()}:{(moment.duration(track.duration_ms).seconds() < 10) ? "0" + moment.duration(track.duration_ms).seconds() : moment.duration(track.duration_ms).seconds()}</p>
        </div>
    )
}

export default SongRow
