import React from 'react';
import './SongRow.css';

function SongRow({ track }) {
    return (
        <div className="songRow">
            <h4>{track.name}</h4>
        </div>
    )
}

export default SongRow
