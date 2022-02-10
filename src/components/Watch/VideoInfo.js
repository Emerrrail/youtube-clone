import './VideoInfo.css';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function VideoInfo({ video }) {

    const channelTitle = video.snippet.channelTitle
    const description = video.snippet.description
    const subscribeCount = 500000 / 10000

    return (
        <div className="videoInfo">
            <div className="videoInfo__top">
                <div className="videoInfo__top_left">
                    <Avatar className="videoInfo__avatar" />
                    <div>
                        <div className="videoInfo__channelTitle">
                            {channelTitle}
                        </div>
                        <div className="videoInfo__subscribeCount">
                            {subscribeCount}萬 位訂閱者
                        </div>
                    </div>
                </div>
                <button className="videoInfo__subscribeBtn">
                    訂閱
                </button>
            </div>
            <div className="videoInfo__description">
                {description}
            </div>
        </div>
    );
}

export default VideoInfo;
