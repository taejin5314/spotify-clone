import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon, playlistId, spotify }) {
    const onClickHandler = (id) => {
        spotify.getPlaylist(id)
            .then(response => {
                console.log(response)
            })
    }
    return (
        <div className={Icon ? "sidebarOption" : "sidebarOption small"} onClick={() => onClickHandler(playlistId)}>
            { Icon && <Icon className="sidebarOption__icon" />}
            { Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div >
    )
}

export default SidebarOption
