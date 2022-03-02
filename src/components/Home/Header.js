import "./Header.css";
import useMediaQuery from '../../helper-function/use-media-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from "./Searchbar";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

function Header({ onFullMenuToggle, setCurrentPath, setShowFullSearchbar }) {

    const simplifySearchbar = useMediaQuery('(max-width: 526px)');


    const onShowFullSearchbarClick = () => {
        setShowFullSearchbar(true);
    }

    return (
        <div className="header">
            <div className="header__left">
                <MenuOutlinedIcon
                    style={{ fontSize: "40" }}
                    className="header__toggleMenu"
                    onClick={onFullMenuToggle}
                />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt=""
                    />
                </Link>
            </div>
            {simplifySearchbar ?
                null
                :
                <div className="header__searchbar">
                    <Searchbar setCurrentPath={setCurrentPath} />
                </div>
            }
            <div className="header__icons">
                {simplifySearchbar ?
                    <div>
                        <SearchIcon
                            className="header__icon"
                            style={{ fontSize: "40" }}
                            onClick={onShowFullSearchbarClick}

                        />
                    </div>
                    : null
                }
                <VideoCallOutlinedIcon
                    className="header__icon"
                    style={{ fontSize: "40" }}
                />
                <AppsIcon
                    className="header__icon"
                    style={{ fontSize: "40" }}
                />
                <NotificationsNoneOutlinedIcon
                    className="header__icon"
                    style={{ fontSize: "40" }}
                />
                <Avatar
                    className="header__icon avatar"
                    alt="user avatar"
                    src=""
                />
            </div>
        </div>
    )
}

export default Header;
