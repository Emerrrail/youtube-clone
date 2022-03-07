import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


function Searchbar({ setCurrentPath }) {
    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/results?search_query=${query}`);
        setCurrentPath(query);
    }

    return (
        <form onSubmit={onSubmit} className="searchBar__input">
            <input
                type="text"
                placeholder="搜尋"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button className="searchBar__searchButton">
                <SearchIcon style={{ fontSize: "25" }} />
            </button>
        </form>
    )
}

export default Searchbar;
