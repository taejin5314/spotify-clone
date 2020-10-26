import React from 'react';
import './Player.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Player({ spotify }) {
    const user = useSelector(selectUser);
    return (
        <div className="player">
            {user?.userInfo.display_name}
        </div>
    )
}

export default Player;
