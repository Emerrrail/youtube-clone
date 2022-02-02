import "./Tags.css";
import React from 'react'
import TagButton from "./TagButton";

function Tags() {
    return (
        <div className="tags">
            <TagButton text="全部" />
            <TagButton text="直播中" />
            <TagButton text="動畫" />
            <TagButton text="野生動物" />
            <TagButton text="自然" />
            <TagButton text="手工藝" />
            <TagButton text="旅遊勝地" />
            <TagButton text="寵物" />
        </div>
    )
}

export default Tags;
