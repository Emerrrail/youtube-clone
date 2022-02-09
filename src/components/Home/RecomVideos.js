import React from 'react'
import Tags from './Tags';
import DefaultVideos from './DefaultVideos';

function RecomVideos({ videos }) {
    return (
        <div className="recomVideos">
            <Tags />
            <DefaultVideos videos={videos}/>
        </div>
    )
}

export default RecomVideos;
