import './WatchContent.css';
import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoMetadata from './VideoMetadata';
import VideoInfo from './VideoInfo';

function WatchContent({ watchVideo, videoId }) {

    if (watchVideo === [] || !watchVideo[0]) {
        return null;
    }
    const video = watchVideo[0]; //把他從array拿出來

    return (
        <div className="videoContent container-xl">
            <VideoPlayer videoId={videoId} />
            <div className="videoContent__title_metadata">
                <h4 className="videoContent__title">
                    {video.snippet.title}
                </h4>
                <VideoMetadata video={video} />
            </div>
            {/* <RelatedVideos /> */}

            <hr />
            <VideoInfo video={video} />
            {/* <hr /> */}
            {/* <Comments /> */}
        </div>
    );
}

export default WatchContent;
