import "./SidebarFullMenu.css"
import React from 'react'
import SidebarRow from './SidebarRow';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

function SidebarFullMenu({ isFullMenuOpen, onFullMenuToggle }) {
    return (
        <div className={`sidebarFullMenu${isFullMenuOpen === true ? ' open' : ''}`}>
            <div className="sidebarFullMenu__top">
                <MenuOutlinedIcon
                    className="sidebarFullMenu__toggleMenu"
                    onClick={onFullMenuToggle}
                />
                <img
                    className="sidebarFullMenu__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </div>
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
        </div>
    )
}

export default SidebarFullMenu;
