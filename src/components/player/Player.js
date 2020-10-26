import React from 'react';
import './Player.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Sidebar from './sidebar/Sidebar';
import Body from './body/Body';
import Footer from './footer/Footer';

function Player({ spotify }) {
    const user = useSelector(selectUser);
    return (
        <div className="player">
            <div className="player__body">
                {/* Sidebar */}
                <Sidebar />
                {/* Body */}
                <Body />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player;
