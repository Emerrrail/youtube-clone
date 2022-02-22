import './ResultsContent.css';
import React from 'react'
import VideoItem from './VideoItem';
import InfiniteScroll from '../InfiniteScroll';

function ResultsContent({ results, bottomReachedCallback }) {

    const renderedVideoItems = results.map((result, index) => {
        return <VideoItem
            pathname="/watch"
            search={`?v=${result.id.videoId}`}
            key={index}
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
            <InfiniteScroll bottomReachedCallback={bottomReachedCallback} />
        </div>
    )
}

export default ResultsContent