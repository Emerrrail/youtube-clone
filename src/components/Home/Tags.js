import "./Tags.css";
import React from 'react'
import TagButton from "./TagButton";


function Tags() {


    return (
        <div className="tags">
            <TagButton text="全部" categoryId="0" />
            <TagButton text="直播中" categoryId="0" />
            <TagButton text="遊戲" categoryId="20" />
            <TagButton text="音樂" categoryId="10" />
            <TagButton text="生活" categoryId="22" />
            <TagButton text="手工藝" categoryId="0" />
            <TagButton text="動畫與戲劇" categoryId="1" />
            <TagButton text="寵物" categoryId="15" />
            <TagButton text="運動" categoryId="17" />
            <TagButton text="新聞" categoryId="25" />
        </div>
    )
}

export default Tags;
