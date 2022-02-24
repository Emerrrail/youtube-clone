import React from 'react';
import { Waypoint } from 'react-waypoint';

function InfiniteScroll({ bottomReachedCallback }) {
    return (
        <Waypoint onEnter={bottomReachedCallback}>
            <div className="loader__container">
            </div>
        </Waypoint>
    );
}

export default InfiniteScroll;