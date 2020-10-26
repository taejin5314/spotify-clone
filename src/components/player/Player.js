import React from 'react';
import './Player.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Sidebar from './sidebar/Sidebar';

function Player({ spotify }) {
    const user = useSelector(selectUser);
    return (
        <div className="player">
            <div className="player__body">
                {/* Sidebar */}
                <Sidebar />
                {/* Body */}
            </div>
            {/* Footer */}
            {user?.userInfo.display_name}
        </div>
    )
}

export default Player;
