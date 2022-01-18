import React from 'react'

function SidebarButton({ Icon, title }) {
    return (
        <div className="sidebarButton">
            <Icon className="sidebarButton__icon"/>
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarButton;
