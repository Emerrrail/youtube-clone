import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearchParam } from '../../helper-function/url';
import { scrollToTop } from '../../helper-function/window-scroll';
import { getWatchVideoDetailsRequested } from '../../store/actions';
import WatchContent from './WatchContent';


function mapStateToProps(state) {
    return {
        state: state,
        watchVideo: state.watchVideo.video
    }   //回傳出去
}

export default connect(mapStateToProps)(Watch);



function Watch({ state, watchVideo }) {

    const dispatch = useDispatch();

    const getVideoId = () => {
        return getSearchParam(window.location, 'v');
    }

    const videoId = getVideoId();


    useEffect(() => {
        dispatch(getWatchVideoDetailsRequested(videoId));
        scrollToTop();
    }, [])

    console.log(state);

    return (
        <div className="watch">
            <WatchContent watchVideo={watchVideo} videoId={videoId} />
        </div>
    )
}

// export default Watch;
