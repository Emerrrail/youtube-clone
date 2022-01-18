import "./Header.css";
import React from 'react'
import Searchbar from "./Searchbar";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';

function Header({ onFullMenuToggle }) {
    return (
        <div className="header">
            <div className="header__left">
                <MenuOutlinedIcon
                    className="header__toggleMenu"
                    onClick={onFullMenuToggle}
                />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </div>
            <Searchbar />
            <div className="header__icons">
                <VideoCallOutlinedIcon className="header__icon" style={{ fontSize: "28" }} />
                <AppsIcon className="header__icon" />
                <NotificationsNoneOutlinedIcon className="header__icon" />
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
