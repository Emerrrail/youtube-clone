import './VideoItem.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

function VideoItem({ pathname, search, img, title, channelName, description }) {
    return (
        <Link to={{pathname: pathname, search: search}}>
        <div className="videoItem">
            <img
                className="videoItem__img"
                src={img}
                alt={title}
            />
            <div className="videoItem__text">
                <h4 className="videoItem__title">{title}</h4>
                {/* <div>viewCounts and daysAgo</div> */}
                <div className="videoItem__channelInfo">
                    <Avatar className="videoItem__avatar" style={{ width: "24px", height: "24px"}} />
                    <div className="videoItem__channelName">
                        {channelName}
                    </div>
                </div>
                <p className="videoItem__description">
                    {description}
                </p>
            </div>
        </div>
</Link>
    )
}

export default VideoItem;