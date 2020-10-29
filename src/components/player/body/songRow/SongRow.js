import React from 'react';
import './SongRow.css';

function SongRow({ track }) {
    return (
        <div className="songRow">
            <img src="" alt="" />
            <div className="songRow__info">
                <h4>{track.name}</h4>
                <p>
                    {track.artists.map((artist) => artist.name).join(', ')}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
