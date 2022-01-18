import "./SidebarFullMenu.css"
import React, { useState } from 'react'
import SidebarRow from './SidebarRow';
import SidebarButton from "./SidebarButton";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function SidebarFullMenu({ isFullMenuOpen, onFullMenuToggle }) {
    const [sidebarRowClicked, setSidebarRowClicked] = useState("首頁");



    return (
        <div className={`sidebarFullMenu${isFullMenuOpen === true ? ' open' : ''}`}>
            <div className="sidebarFullMenu__top">
                <MenuOutlinedIcon
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
                <li><a>
                    <SidebarRow
                        Icon={HomeOutlinedIcon}
                        IconClicked={HomeIcon}
                        title="首頁"
                        setSidebarRowClicked={setSidebarRowClicked}
                        sidebarRowClicked={sidebarRowClicked}
                    />
                </a></li>
                <li><a>
                    <SidebarRow
                        Icon={ExploreOutlinedIcon}
                        IconClicked={ExploreIcon}
                        title="探索"
                        setSidebarRowClicked={setSidebarRowClicked}
                        sidebarRowClicked={sidebarRowClicked}
                    />
                </a></li>
                <li><a>
                    <SidebarRow
                        Icon={SubscriptionsOutlinedIcon}
                        IconClicked={SubscriptionsIcon}
                        title="訂閱內容"
                        setSidebarRowClicked={setSidebarRowClicked}
                        sidebarRowClicked={sidebarRowClicked}
                    />
                </a></li>
                
            </ul>
        </div>
    )
}

export default SidebarFullMenu;
