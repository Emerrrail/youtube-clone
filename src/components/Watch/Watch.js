import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

    const getSearchParam = (location, name) => {
        if (!location || !location.search) {
            return null;
        }
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(name); //取得videoId
    };

    const videoId = getVideoId();


    useEffect(() => {
        dispatch(getWatchVideoDetailsRequested(videoId));
    }, [])

    console.log(state);
    
    return (
        <div className="watch">
            <WatchContent watchVideo={watchVideo} videoId={videoId} />
        </div>
    )
}

// export default Watch;
