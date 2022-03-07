import React from 'react';
import { useLocation } from "react-router-dom";

function SidebarRow({ Icon, IconClicked, title, path }) {

    const location = useLocation();

    return (
        <div className="sidebarRow">
            {location.pathname === path ?
                <IconClicked className="sidebarRow__icon" />
                : <Icon className="sidebarRow__icon" />}
            <div className="sidebarRow__title">
                {title}
            </div>
        </div>
    )
}

export default SidebarRow;
