import "./DefaultVideos.css";
import React from 'react'
import VideoCard from "./VideoCard";

function DefaultVideos({ defaultVideos }) {

    const renderDefaultVideos = defaultVideos.map((defaultVideo) => {
        return <VideoCard
            key={defaultVideo.id}
            img={defaultVideo.snippet.thumbnails.medium.url}
            title={defaultVideo.snippet.title}
            // channelImg={}
            channelName={defaultVideo.snippet.channelTitle}
            views={defaultVideo.statistics.viewCount}
        />
    })
    return (
        <div className="defaultVideos">
            <div className="defaultVideos__container">
                {renderDefaultVideos}
            </div>
        </div>
    )
}

export default DefaultVideos;
