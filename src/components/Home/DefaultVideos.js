import "./DefaultVideos.css";
import React from 'react'
import VideoCard from "./VideoCard";

function DefaultVideos({ videos }) {

    const renderVideos = videos.map((video) => {
        return <VideoCard
            pathname="/watch"
            search={`?v=${video.id}`}
            key={video.id}
            videoId={video.id}
            img={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            // channelImg={}
            channelName={video.snippet.channelTitle}
            views={video.statistics.viewCount}
        />
    })
    return (
        <div className="defaultVideos">
            <div className="defaultVideos__container">
                {renderVideos}
            </div>
        </div>
    )
}

export default DefaultVideos;
