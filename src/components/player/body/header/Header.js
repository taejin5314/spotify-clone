import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../features/userSlice';
import './Header.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Header({ spotify }) {
    const user = useSelector(selectUser);
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setShow(true);
            } else setShow(false);
        });
    }, []);

    return (
        <div className={`header ${show && 'black'}`}>
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
                <Avatar src={user?.userInfo?.images[0]?.url} alt="Avatar" style={{ cursor: "pointer", width: "32px", height: "32px" }} />
            </div>
        </div>
    )
}

export default Header
