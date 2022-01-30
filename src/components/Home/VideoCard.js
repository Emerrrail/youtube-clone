import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ img, title, channelImg, channelName, views, daysAgo }) {
    const viewsW = Math.floor(views / 10000);
    return (
        <div className="videoCard">
            <img
                className="videoCard__img"
                src={img}
                alt=""

            />
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__avatar"
                    src={channelImg}
                    alt={channelName}
                />
                <div className="videoCard__text">
                    <h4 className="videoCard__title">{title}</h4>
                    <div className="videoCard__bottom">
                        <p className="videoCard__channelName">{channelName}</p>
                        <p className="videoCard__viewsAndTime">觀看次數：{viewsW}萬次 • 2 天前</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VideoCard;
