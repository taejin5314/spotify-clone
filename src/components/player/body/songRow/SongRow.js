import React from 'react';
import './SongRow.css';

function SongRow({ track, index }) {
    const artist = track.artists.map((artist) => artist.name).join(', ');
    return (
        <div className="songRow">
            <div className="songRow__title">
                <p className="songRow__index">{index + 1}</p>
                <img className="songRow__album" src={track.album.images[0].url} alt="" />
                <div className="songRow__songTitle">
                    <h1 className="songRow__songName">{((track.name).length > 23) ?
                        (((track.name).substring(0, 23 - 3)) + '...') :
                        track.name}</h1>
                    <p className="songRow__songArtist">
                        {((artist).length > 20) ?
                            (((artist).substring(0, 20 - 3)) + '...') :
                            artist}
                    </p>
                </div>
            </div>
            <p className="songRow__songAlbum">
                {((track.album.name).length > 20) ?
                    (((track.album.name).substring(0, 20 - 3)) + '...') :
                    track.album.name}
            </p>

            <p className="songRow__songAdded">3 days</p>

            <p className="songRow__songDuration">3:40</p>
        </div>
    )
}

export default SongRow
