import youtube from "../../apis/youtube"
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarFullMenu from "./SidebarFullMenu";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomVideos from "./RecomVideos";



function Home({ state, videos }) {   //當props傳進來

    // const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
    // const [defaultVideos, setDefaultVideos] = useState([]);
    // const onFullMenuToggle = () => {
    //     setIsFullMenuOpen(!isFullMenuOpen);
    // }

    // useEffect(() => {
        // const getDefaultVideos = async () => {
        //     const response = await youtube.get('/videos', {
        //         params: {
        //             part: "snippet, contentDetails, statistics",
        //             chart: "mostPopular",
        //             maxResults: 20,
        //             regionCode: "TW"
        //         }
        //     });
        //     setDefaultVideos(response.data.items);
        // }
        // getDefaultVideos();
        // getAllPopularVideosRequested();
    // }, [state]);  //state改變就re-render


    return (
        <div className="home">
            {/* <SidebarFullMenu
                className="home__sidebarFullMenu"
                isFullMenuOpen={isFullMenuOpen}
                onFullMenuToggle={onFullMenuToggle}
            />
            <Header
                onFullMenuToggle={onFullMenuToggle}
            /> */}
            <div className="home__page">
                <Sidebar
                    className="home__sidebar"
                />
                <RecomVideos videos={videos} />
            </div>
        </div>
    );
}


export default Home;