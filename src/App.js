import "./App.css";
import React, { useState } from "react";
import SidebarFullMenu from "./components/SidebarFullMenu";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecomVideos from "./components/RecomVideos";

function App() {

    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

    function onFullMenuToggle() {
        setIsFullMenuOpen(!isFullMenuOpen);
    }

    return (
        <div className="app">
            <SidebarFullMenu 
                isFullMenuOpen={isFullMenuOpen}
                onFullMenuToggle={onFullMenuToggle}
            />
            <Header
                onFullMenuToggle={onFullMenuToggle}
            />
            <div className="app__page">
                <Sidebar
                    className="app__sidebar"
                />
                <RecomVideos />
            </div>

        </div>
    );
}

export default App;