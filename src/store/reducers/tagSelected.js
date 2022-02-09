import { VIDEO_RENDERED_TAG_SELECTED } from '../actions/index';

const initialState = {
    selectedTag: "全部",
    categoryId: "0"
}

export const tagSelected = (state = initialState, action) => {
    switch (action.type) {
        case VIDEO_RENDERED_TAG_SELECTED:
            return {
                ...state,
                selectedTag: action.payload.selectedTag,
                categoryId: action.payload.categoryId
            }
        default:
            return state;
    }
}