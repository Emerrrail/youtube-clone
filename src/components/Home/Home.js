import useMediaQuery from "../../helper-function/use-media-query";
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import RecomVideos from "./RecomVideos";
import InfiniteScroll from "../InfiniteScroll";
import HomePlaceholder from "./HomePlaceholder";
import { getVideosByCategoryRequested, getVideosByCategoryLoadMore } from '../../store/actions/index';


function mapStateToProps(state) {
    return {
        videos: state.videos.videos,
        token: state.videos.nextPageToken,
        loading: state.videos.loading,
        categoryId: state.tagSelected.categoryId
    }   //回傳出去
}

export default connect(mapStateToProps)(Home);

function Home({ videos, token, loading, categoryId }) {   //當props傳進來

    const dispatch = useDispatch();

    const hideSidebar = useMediaQuery('(max-width: 720px)');

    useEffect(() => {

        dispatch(getVideosByCategoryRequested(categoryId));
        

    }, [categoryId])

    const bottomReachedCallback = () => {
        console.log('bottom reached from home page');
        dispatch(getVideosByCategoryLoadMore(categoryId, token));
    }

    return (
        <div className="home">
            {hideSidebar ?
                <div className="home__page">
                    <RecomVideos videos={videos} loading={loading} />
                    <InfiniteScroll bottomReachedCallback={bottomReachedCallback} />
                    .
                    {videos && loading ? <HomePlaceholder /> : null}
                </div>
                : <div className="home__page">
                    <Sidebar
                        className="home__sidebar"
                    />
                    <RecomVideos videos={videos} loading={loading} />
                    <InfiniteScroll bottomReachedCallback={bottomReachedCallback} />
                    .
                    {videos && loading ? <HomePlaceholder /> : null}
                </div>
            }
        </div>
    );
}

// export default Home;