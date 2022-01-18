import React from 'react'
import Tags from './Tags';
import DefaultVideos from './DefaultVideos';

function RecomVideos({ defaultVideos }) {
    return (
        <div className="recomVideos">
            <Tags />
            <DefaultVideos defaultVideos={defaultVideos}/>
        </div>
    )
}

export default RecomVideos;
