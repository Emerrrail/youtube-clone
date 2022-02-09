import React from 'react';

function VideoPlayer({ videoId }) {

    const videoBaseSrc = "https://www.youtube.com/embed/"

    return (
        <div className="videoPlayer">
            <iframe
                title="video player"
                src={`${videoBaseSrc}${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default VideoPlayer;
