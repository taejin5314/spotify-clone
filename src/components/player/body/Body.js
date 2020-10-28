import React from 'react';
import './Body.css'
import Header from './header/Header';

function Body({ spotify }) {
    return (
        <div className="body">
            <div className="body__container">
                <Header />
            </div>
        </div>
    )
}

export default Body
