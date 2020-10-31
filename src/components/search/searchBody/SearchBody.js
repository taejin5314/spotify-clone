import React from 'react';
import SearchHeader from '../searchHeader/SearchHeader';
import './SearchBody.css';

function SearchBody({ spotify }) {
    return (
        <div className="searchBody">
            <div className="body__container">
                <SearchHeader spotify={spotify} />
            </div>
        </div>
    )
}

export default SearchBody
