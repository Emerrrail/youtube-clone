import "./App.css";
import youtube from "./apis/youtube";
import React, { useState, useEffect } from "react";
import SidebarFullMenu from "./components/SidebarFullMenu";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecomVideos from "./components/RecomVideos";

function App() {

    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
    const [defaultVideos, setDefaultVideos] = useState([]);

    const onFullMenuToggle = () => {
        setIsFullMenuOpen(!isFullMenuOpen);
    }

    useEffect(() => {
        const getDefaultVideos = async () => {
            const response = await youtube.get('/videos', {
                params: {
                    part: "snippet, contentDetails, statistics",
                    chart: "mostPopular",
                    maxResults: 20,
                    regionCode: "TW"
                }
            });
            setDefaultVideos(response.data.items);
        }
        getDefaultVideos();
    }, []);


    return (
        <div className="app">
            <SidebarFullMenu
                className="app__sidebarFullMenu"
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
                <RecomVideos defaultVideos={defaultVideos}/>
            </div>

        </div>
    );
}

export default App;