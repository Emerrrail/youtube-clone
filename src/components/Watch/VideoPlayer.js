import './VideoPlayer.css';
import React from 'react';


function VideoPlayer({ videoId }) {

    const videoBaseSrc = "https://www.youtube.com/embed/"

    return (
        <div className="videoPlayer row videobox">
            {/* <div className="row"> */}
                <iframe
                    className="videoPlayer__player"
                    title="video player"
                    src={`${videoBaseSrc}${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            {/* </div> */}
        </div>
    );
}

export default VideoPlayer;
