import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function VideoInfo({ video }) {

    const channelTitle = video.snippet.channelTitle
    const description = video.snippet.description
    return (
        <div className="videoInfo">
            <Avatar />
            <div>
                {channelTitle}
            </div>
            <div>
                {description}
            </div>
        </div>
    );
}

export default VideoInfo;
