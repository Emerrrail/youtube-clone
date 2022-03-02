import './HeaderSimplified.css';
import React from 'react';
import Searchbar from './Searchbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function HeaderSimplified({ setCurrentPath, setShowFullSearchbar }) {

    const onShowFullSearchbarClick = () => {
        setShowFullSearchbar(false);
    }

    return (
        <div className="headerSimplified">
            <ArrowBackIcon
                className="headerSimplified__arrowBack"
                onClick={onShowFullSearchbarClick}
                style={{ fontSize: '40px' }}
            />
            <div className="headerSimplified__searchbar">
                <Searchbar setCurrentPath={setCurrentPath}/>
            </div>
        </div>
    )
}

export default HeaderSimplified