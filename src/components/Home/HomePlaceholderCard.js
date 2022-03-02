import React from 'react'

function HomePlaceholderCard() {
    return (
        <div className="homePlaceholderCard" aria-hidden="true">
            <div className="homePlaceholderCard__img"></div>
            <div className="homePlaceholderCard__body">
                <div className="homePlaceholderCard__avatar"></div>
                <div className="container">
                    <div className="homePlaceholderCard__text col-8"></div>
                    <div className="homePlaceholderCard__text col-5"></div>
                </div>
            </div>
        </div>
    )
}

export default HomePlaceholderCard;