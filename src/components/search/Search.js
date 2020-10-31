import React from 'react';
import Footer from '../player/footer/Footer';
import Sidebar from '../player/sidebar/Sidebar';
import './Search.css'
import SearchBody from './searchBody/SearchBody';

function Search({ spotify }) {
    return (
        <div className="search">
            <div className="search__body">
                <Sidebar spotify={spotify} />
                <SearchBody spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Search
