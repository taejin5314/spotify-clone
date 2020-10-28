import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../features/userSlice';
import './Header.css';

function Header() {
    const user = useSelector(selectUser);

    return (
        <div className="header">
            <div className="header__left">

            </div>

            <div className="header__right">
                <Avatar src={user?.userInfo?.images[0]?.url} alt="Avatar" />
                <h4>{user?.userInfo?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
