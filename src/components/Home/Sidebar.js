import "./Sidebar.css";
import React from "react";
import SidebarButton from "./SidebarButton";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';

function Sidebar({ isFullMenuOpen }) {

    return (
        <div className="sidebar">
            <ul className="sidebar__menu">
                <li><a><SidebarButton Icon={HomeOutlinedIcon} title="首頁" /></a></li>
                <li><a><SidebarButton Icon={ExploreOutlinedIcon} title="探索" /></a></li>
                <li><a><SidebarButton Icon={SubscriptionsOutlinedIcon} title="訂閱內容" /></a></li>
                <li><a><SidebarButton Icon={VideoLibraryOutlinedIcon} title="媒體庫" /></a></li>
            </ul>
        </div>
    );
}

export default Sidebar;