import useMediaQuery from "../../helper-function/use-media-query";
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import RecomVideos from "./RecomVideos";
import InfiniteScroll from "../InfiniteScroll";
import HomePlaceholder from "./HomePlaceholder";
import { getVideosByCategoryRequested, getVideosByCategoryLoadMore } from '../../store/actions/index';
import { scrollToTop } from '../../helper-function/window-scroll'

function Home({ videos, token, loading, categoryId }) {

    const dispatch = useDispatch();

    const hideSidebar = useMediaQuery('(max-width: 720px)');

    useEffect(() => {
        dispatch(getVideosByCategoryRequested(categoryId));
        scrollToTop()
    }, [categoryId, dispatch])

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

function mapStateToProps(state) {
    return {
        videos: state.videos.videos,
        token: state.videos.nextPageToken,
        loading: state.videos.loading,
        categoryId: state.tagSelected.categoryId
    }
}

export default connect(mapStateToProps)(Home)