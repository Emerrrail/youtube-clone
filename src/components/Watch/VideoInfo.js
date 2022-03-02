import './VideoInfo.css';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

function VideoInfo({ video }) {

    const channelName = video.snippet.channelTitle
    const description = video.snippet.description
    const subscribeCount = 500000 / 10000

    const [showFullInfo, setShowFullInfo] = useState(false);

    const onShowFullInfoClick = () => {
        setShowFullInfo(!showFullInfo);
    }


    return (
        <div className="videoInfo">
            <div className="videoInfo__top">
                <div className="videoInfo__top_left">
                    <Avatar className="videoInfo__avatar" />
                    <div>
                        <div className="videoInfo__channelName">
                            {channelName}
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
            <div className={showFullInfo ? 'videoInfo__descriptionFull' : 'videoInfo__description'} style={{ whiteSpace: "pre-wrap" }}>
                {description}
            </div>
            <div className={`videoInfo__show_full_info${showFullInfo ? ' hide' : ''}`} onClick={onShowFullInfoClick}>
                顯示完整資訊
            </div>
            <div className={`videoInfo__hide_full_info${showFullInfo ? '' : ' hide'}`} onClick={onShowFullInfoClick}>
                隱藏完整資訊
            </div>
        </div>
    );
}

export default VideoInfo;
