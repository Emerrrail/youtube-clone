import React from 'react';
import { useLocation } from 'react-router-dom';

function SidebarButton({ Icon, IconClicked, title, path }) {

    const location = useLocation();

    return (
        <div className="sidebarButton">
            {location.pathname === path ?
                <IconClicked className="sidebarButton__icon" />
                : <Icon className="sidebarButton__icon" />}
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarButton;
