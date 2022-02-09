import React from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function VideoMetadata({ video }) {

    const viewCount = Number(video.statistics.viewCount).toLocaleString()
    const publishedAt = video.snippet.publishedAt
    const likeCount = Math.ceil(video.statistics.likeCount / 10000);

    return (
        <div className="videoMetadata">
            <div className="videoMetadata__view_published">
                {`觀看次數：${viewCount}次．首播日期：${publishedAt}`}
            </div>
            <div className="videoMetadata__right">
                <div className="videoMetadata__like">
                    <ThumbUpAltOutlinedIcon />
                    {`${likeCount}萬`}
                </div>
                <div className="videoMetadata__dislike">
                    <ThumbDownAltOutlinedIcon />
                    不喜歡
                </div>
                <div className="videoMetadata__share">
                    <ShareOutlinedIcon />
                    分享
                </div>
            </div>
        </div>
    );
}

export default VideoMetadata;
