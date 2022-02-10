import './VideoMetadata.css';
import React from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function VideoMetadata({ video }) {

    const viewCount = Number(video.statistics.viewCount).toLocaleString();
    const day = new Date(video.snippet.publishedAt);
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();
    const publishedAt = `${year}年${month}月${date}日`;

    const likeCount = video.statistics.likeCount > 10000 ? Math.ceil(video.statistics.likeCount / 10000) : Number(video.statistics.likeCount).toLocaleString();

    return (
        <div className="videoMetadata">
            <div className="videoMetadata__view_published">
                {`觀看次數：${viewCount}次．首播日期：${publishedAt}`}
            </div>
            <div className="videoMetadata__right">
                <div className="videoMetadata__like metaBtn">
                    <ThumbUpAltOutlinedIcon className="videoMetadata_icon" />
                    <p className="videoMetadata__right_text">
                        {`${likeCount}萬`}
                    </p>
                </div>
                <div className="videoMetadata__dislike metaBtn">
                    <ThumbDownAltOutlinedIcon className="videoMetadata_icon" />
                    <p className="videoMetadata__right_text">
                        不喜歡
                    </p>
                </div>
                <div className="videoMetadata__share metaBtn">
                    <ShareOutlinedIcon className="videoMetadata_icon" />
                    <p className="videoMetadata__right_text">
                        分享
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoMetadata;
