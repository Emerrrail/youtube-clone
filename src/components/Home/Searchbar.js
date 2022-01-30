import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {
    return (
        <div className="searchBar">
            <div className="searchBar__input">
                <input type="text" placeholder="搜尋" />
                <button className="searchBar__searchButton">
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default Searchbar;
