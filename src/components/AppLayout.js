import React, { useState } from 'react';
import Header from './Home/Header';
import SidebarFullMenu from './Home/SidebarFullMenu';

function AppLayout({ children }) {

    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

    const onFullMenuToggle = () => {
        setIsFullMenuOpen(!isFullMenuOpen);
    }

    return (
        <div className="appLayout">
            <SidebarFullMenu
                className="home__sidebarFullMenu"
                isFullMenuOpen={isFullMenuOpen}
                onFullMenuToggle={onFullMenuToggle}
            />
            <Header onFullMenuToggle={onFullMenuToggle} />
            {children}
        </div>
    );
}

export default AppLayout;
