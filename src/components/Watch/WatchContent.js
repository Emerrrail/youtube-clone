import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoMetadata from './VideoMetadata';
import VideoInfo from './VideoInfo';

function WatchContent({ watchVideo, videoId }) {

    if (watchVideo === [] || !watchVideo[0]) {
        return null;
    }
    const video = watchVideo[0]; //把他從array拿出來

    console.log(video.snippet, 'watchcontent')

    return (
        <div className="videoContent">
            <VideoPlayer videoId={videoId} />
            <h4 className="videoContent__title">
                {video.snippet.title}
            </h4>
            <VideoMetadata video={video} />
            
            {/* <RelatedVideos /> */}
            {/* <Comments /> */}
            <hr />
            <VideoInfo video={video} />
        </div>
    );
}

export default WatchContent;
