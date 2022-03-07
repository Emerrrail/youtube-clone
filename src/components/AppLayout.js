import React, { useState } from 'react';
import Header from './Home/Header';
import SidebarFullMenu from './Home/SidebarFullMenu';
import HeaderSimplified from './Home/HeaderSimplified';

function AppLayout({ children, setCurrentPath }) {

    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

    const [showFullSearchbar, setShowFullSearchbar] = useState(false);

    const onFullMenuToggle = () => {
        console.log('toggle')
        setIsFullMenuOpen(!isFullMenuOpen);
    }

    return (
        <div className="appLayout">
            {showFullSearchbar ?
                <HeaderSimplified
                    setCurrentPath={setCurrentPath}
                    setShowFullSearchbar={setShowFullSearchbar}
                />
                : <Header
                    setCurrentPath={setCurrentPath}
                    onFullMenuToggle={onFullMenuToggle}
                    setShowFullSearchbar={setShowFullSearchbar}
                />
            }
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
