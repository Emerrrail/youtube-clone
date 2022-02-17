import './ResultsContent.css';
import React from 'react'
import VideoItem from './VideoItem';

function ResultsContent({ results }) {

    const renderedVideoItems = results.map((result) => {
        return <VideoItem
            pathname="/watch"
            search={`?v=${result.id.videoId}`}
            key={result.id.videoId}
            img={result.snippet.thumbnails.medium.url}
            title={result.snippet.title}
            // channelImg={}
            channelName={result.snippet.channelTitle}
            description={result.snippet.description}
        // views={result.statistics.viewCount}
        // daysAgo={} 
        />
    })

    return (
        <div className="resultsContent">
            <hr className="resultsContent__hr" />
            {renderedVideoItems}
        </div>
    )
}

export default ResultsContent