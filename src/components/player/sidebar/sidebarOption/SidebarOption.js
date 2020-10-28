import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_CURRENT_PLAYLIST } from '../../../../features/userSlice';
import './SidebarOption.css';

function SidebarOption({ title, Icon, playlistId, spotify }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const onClickHandler = (id) => {
        if (id) {
            history.push(`/playlist/${id}`)
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
