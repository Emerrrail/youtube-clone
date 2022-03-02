import React from 'react'
import Tags from './Tags';
import HomePlaceholder from './HomePlaceholder';
import DefaultVideos from './DefaultVideos';

function RecomVideos({ videos, loading }) {
    return (
        <div className="recomVideos">
            <Tags />
            {loading && <HomePlaceholder />}
            <DefaultVideos videos={videos} />
        </div>
    )
}

export default RecomVideos;
