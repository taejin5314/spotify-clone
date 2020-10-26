import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Player() {
    const user = useSelector(selectUser);
    return (
        <div className="player">
            {user?.userInfo.display_name}
        </div>
    )
}

export default Player
