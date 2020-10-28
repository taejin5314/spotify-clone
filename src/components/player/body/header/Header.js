import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../features/userSlice';
import './Header.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Header() {
    const user = useSelector(selectUser);

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__iconButton">
                    <ArrowBackIosIcon fontSize="small" />
                </div>

                <div className="header__iconButton">
                    <ArrowForwardIosIcon fontSize="small" />
                </div>
            </div>

            <div className="header__right">
                <button>UPGRADE</button>
                <Avatar src={user?.userInfo?.images[0]?.url} alt="Avatar" style={{ width: "32px", height: "32px" }} />
            </div>
        </div>
    )
}

export default Header
