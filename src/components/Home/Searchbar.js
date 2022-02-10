import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { searchTermRequested } from '../../store/actions/index';

function Searchbar() {

    const dispatch = useDispatch();

    const [term, setTerm] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        
        dispatch(searchTermRequested(term));
    }

    

    return (
        <div className="searchBar">
            <form onSubmit={onSubmit} className="searchBar__input">
                <input
                    type="text"
                    placeholder="搜尋"
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
                <button className="searchBar__searchButton">
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}

export default Searchbar;
