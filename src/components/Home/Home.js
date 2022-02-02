import youtube from "../../apis/youtube"
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarFullMenu from "./SidebarFullMenu";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomVideos from "./RecomVideos";

import { getAllPopularVideosRequested } from '../../store/actions/api';

function mapStateToProps (state) {
    console.log(state.videosReducer, "state.videosReducer")
    return {videos: state.videosReducer.videos}   //回傳出去
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllPopularVideosRequested }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


function Home({videos}) {   //當props傳進來

    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
    const [defaultVideos, setDefaultVideos] = useState([]);

    const onFullMenuToggle = () => {
        setIsFullMenuOpen(!isFullMenuOpen);
    }

    useEffect(() => {
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
        getAllPopularVideosRequested();
    }, []);


    return (
        <div className="home">
            <SidebarFullMenu
                className="home__sidebarFullMenu"
                isFullMenuOpen={isFullMenuOpen}
                onFullMenuToggle={onFullMenuToggle}
            />
            <Header
                onFullMenuToggle={onFullMenuToggle}
            />
            <div className="home__page">
                <Sidebar
                    className="home__sidebar"
                />
                <RecomVideos defaultVideos={videos}/>
            </div>
        </div>
    );
}



// export default Home;