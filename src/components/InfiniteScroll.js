import React from 'react';
import { Waypoint } from 'react-waypoint';

function InfiniteScroll({ bottomReachedCallback }) {
    return (
        <Waypoint onEnter={bottomReachedCallback}>
            <div>
            </div>
        </Waypoint>
    );
}

export default InfiniteScroll;