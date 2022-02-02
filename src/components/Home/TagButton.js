import React from 'react';

function TagButton({ text }) {
    return (
        <div className="tagButton">
            <div className="tagButton__text">
                {text}
            </div>
        </div>
    );
}

export default TagButton;
