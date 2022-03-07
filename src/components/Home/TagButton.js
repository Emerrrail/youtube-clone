import React from 'react';
import { useDispatch } from "react-redux";
import { videoRenderedTagSelected } from "../../store/actions/index";
import { connect } from 'react-redux';

function TagButton({ text, categoryId, tagSelected }) {

    const dispatch = useDispatch();

    return (
        <div
            className={`${tagSelected === text ? "tagButtonNoHover selected" : "tagButton"}`}
            onClick={() => dispatch(videoRenderedTagSelected(text, categoryId))}
        >
            <div className="tagButton__text">
                {text}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        tagSelected: state.tagSelected.selectedTag
    }
}
export default connect(mapStateToProps)(TagButton)
