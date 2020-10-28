import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlaylist, SET_CURRENT_PLAYLIST } from '../../../../features/userSlice';
import './SidebarOption.css';

function SidebarOption({ title, Icon, playlistId, spotify }) {
    const currentPlaylist = useSelector(selectCurrentPlaylist);
    const dispatch = useDispatch();

    const onClickHandler = (id) => {
        if (id) {
            spotify.getPlaylist(id)
                .then(playlist => {
                    dispatch(SET_CURRENT_PLAYLIST({
                        playlist,
                    }))
                })
        }
    }
    return (
        <div className={Icon ? "sidebarOption" : "sidebarOption small"} onClick={() => onClickHandler(playlistId)}>
            { Icon && <Icon className="sidebarOption__icon" />}
            { Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div >
    )
}

export default SidebarOption
