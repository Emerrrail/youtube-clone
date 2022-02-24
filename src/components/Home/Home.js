import youtube from "../../apis/youtube"
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
// import SidebarFullMenu from "./SidebarFullMenu";
// import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomVideos from "./RecomVideos";
import InfiniteScroll from "../InfiniteScroll";
import { getVideosByCategoryRequested, getVideosByCategoryLoadMore } from '../../store/actions/index';


function mapStateToProps(state) {
    return {
        videos: state.videos.videos,
        token: state.videos.nextPageToken,
        categoryId: state.tagSelected.categoryId
    }   //回傳出去
}

export default connect(mapStateToProps)(Home);

function Home({ videos, token, categoryId }) {   //當props傳進來

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
    // getVideosByCategoryRequested();
    // }, [state]);  //state改變就re-render

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getVideosByCategoryRequested(categoryId));

    }, [categoryId])

    const bottomReachedCallback = () => {
        console.log('bottom reached from home page');
        dispatch(getVideosByCategoryLoadMore(categoryId, token));
    }

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
                <InfiniteScroll bottomReachedCallback={bottomReachedCallback} />
                Loading
            </div>
        </div>
    );
}

// export default Home;