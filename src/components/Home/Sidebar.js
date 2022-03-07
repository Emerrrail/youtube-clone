import "./Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Sidebar({ isFullMenuOpen }) {

    return (
        <div className="sidebar">
            <ul className="sidebar__menu">
                <li>
                    <Link to="/">
                        <SidebarButton
                            Icon={HomeOutlinedIcon}
                            IconClicked={HomeIcon}
                            title="首頁"
                            path="/"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/explore">
                        <SidebarButton
                            Icon={ExploreOutlinedIcon}
                            IconClicked={ExploreIcon}
                            title="探索"
                            path="/explore"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/feed/subscriptions">
                        <SidebarButton
                            Icon={SubscriptionsOutlinedIcon}
                            IconClicked={SubscriptionsIcon}
                            title="訂閱內容"
                            path="/feed/subscriptions"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/feed/library">
                        <SidebarButton
                            Icon={VideoLibraryOutlinedIcon}
                            title="媒體庫"
                            path="/feed/library"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;