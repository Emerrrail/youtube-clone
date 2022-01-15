import "./Header.css";
import React from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Box p={1}>
                    <MenuOutlinedIcon />
                </Box>
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </div>
            <div className="header__input">
                <input type="text" placeholder="搜尋"/>
                <button className="header__searchbutton">
                    <SearchIcon />
                </button>
            </div>

            <div className="header__icons">
                <Box p={1} pt={1} mr={1}>
                    <VideoCallOutlinedIcon style={{ fontSize: "28"}}/>
                </Box>
                <Box p={1} pt={1} mr={1}>
                    <AppsIcon />
                </Box>
                <Box p={1} pt={1} mr={1}>
                    <NotificationsNoneOutlinedIcon />
                </Box>
                <Box p={1}>
                    <Avatar
                        alt="Emerail"
                        src=""
                    />
                </Box>
            </div>
        </div>
    )
}

export default Header
