import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import './SearchHeader.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ReactComponent as Search } from '../../../images/search_narrow.svg'

function SearchHeader({ spotify }) {
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
        <div className={`searchHeader ${show && 'black'}`}>
            <div className="searchHeader__left">
                <div className="searchHeader__iconButton">
                    <ArrowBackIosIcon fontSize="small" />
                </div>

                <div className="searchHeader__iconButton">
                    <ArrowForwardIosIcon fontSize="small" />
                </div>

                <div className="searchHeader__input">
                    <Search />
                    <input placeholder="Search" type="text" />
                </div>
            </div>



            <div className="searchHeader__right">
                <button>UPGRADE</button>
                <Avatar src={user?.userInfo?.images[0]?.url} alt="Avatar" style={{ cursor: "pointer", width: "32px", height: "32px" }} />
            </div>
        </div>
    )
}

export default SearchHeader
