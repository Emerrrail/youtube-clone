import React, { useState } from 'react'

function SidebarRow({ Icon, IconClicked, title, setSidebarRowClicked, sidebarRowClicked }) {

    const onSidebarRowClick = (target) => {
        setSidebarRowClicked(target.target.innerText);
    }

    return (
        <div
            className="sidebarRow"
            onClick={(target) => console.log(target.target, 'inside')}
        >
            <Icon className="sidebarRow__icon"/>
            <div className={`sidebarRow__title${sidebarRowClicked === title ? " active" : ''}`}>
                {title}
            </div>

        </div>
    )
}

export default SidebarRow;
