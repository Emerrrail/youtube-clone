import './ResultsContent.css';
import React from 'react'
import VideoItem from './VideoItem';
import InfiniteScroll from '../InfiniteScroll';
import Loader from '../Loader';

function ResultsContent({ results, bottomReachedCallback, loading }) {

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
            <div className="resultsContent__renderedVideoItems">
                <hr className="resultsContent__hr" />
                {renderedVideoItems}
            </div>
            <InfiniteScroll bottomReachedCallback={bottomReachedCallback} />
            {results && loading ? <Loader /> : null}
        </div>
    )
}

export default ResultsContent