import React, { useState } from 'react';
import Header from './Home/Header';
import SidebarFullMenu from './Home/SidebarFullMenu';

function AppLayout({ children, setCurrentPath }) {

    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

    const onFullMenuToggle = () => {
        setIsFullMenuOpen(!isFullMenuOpen);
    }

    return (
        <div className="appLayout">

            <Header setCurrentPath={setCurrentPath} onFullMenuToggle={onFullMenuToggle} />
            {children}
            <SidebarFullMenu
                className="home__sidebarFullMenu"
                isFullMenuOpen={isFullMenuOpen}
                onFullMenuToggle={onFullMenuToggle}
            />
        </div>
    );
}

export default AppLayout;
