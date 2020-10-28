import React from 'react';
import Footer from '../player/footer/Footer';
import Sidebar from '../player/sidebar/Sidebar';
import './Library.css';

function Library({ spotify }) {
    return (
        <div className="library">
            <div className="library__body">
                <Sidebar spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Library
