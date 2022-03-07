import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ pathname, search, img, title, channelImg, channelName, views }) {

    const viewsW = Math.floor(views / 10000).toLocaleString();

    return (
        <Link to={{ pathname: pathname, search: search }} >
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
        </Link>
    )
}

export default VideoCard;
