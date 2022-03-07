import "./SidebarFullMenu.css"
import React from 'react';
import { Link } from "react-router-dom";
import SidebarRow from './SidebarRow';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function SidebarFullMenu({ isFullMenuOpen, onFullMenuToggle }) {


    return (
        <div className={`sidebarFullMenu${isFullMenuOpen === true ? ' open' : ''}`}>
            <div className="sidebarFullMenu__top">
                <MenuOutlinedIcon
                    style={{ fontSize: "40px" }}
                    className="sidebarFullMenu__toggleIcon"
                    onClick={onFullMenuToggle}
                />
                <img
                    className="sidebarFullMenu__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </div>
            <ul className="sidebarFullMenu__fullMenu">
                <li onClick={onFullMenuToggle}>
                    <Link to="/">
                        <SidebarRow
                            Icon={HomeOutlinedIcon}
                            IconClicked={HomeIcon}
                            title="首頁"
                            path="/"
                        />
                    </Link>
                </li>
                <li onClick={onFullMenuToggle}>
                    <Link to="/explore">
                        <SidebarRow
                            Icon={ExploreOutlinedIcon}
                            IconClicked={ExploreIcon}
                            title="探索"
                            path="/explore"
                        />
                    </Link>
                </li>
                <li onClick={onFullMenuToggle}>
                    <Link to="/feed/subscriptions">
                        <SidebarRow
                            Icon={SubscriptionsOutlinedIcon}
                            IconClicked={SubscriptionsIcon}
                            title="訂閱內容"
                            path="/feed/subscriptions"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarFullMenu;
