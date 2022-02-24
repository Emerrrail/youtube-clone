import { GET_VIDEOS_BY_CATEGORY_REQUESTED, GET_VIDEOS_BY_CATEGORY_SUCCESS, GET_VIDEOS_BY_CATEGORY_ERROR } from '../actions';
import { GET_VIDEOS_BY_CATEGORY_LOAD_MORE, GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS, GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR } from '../actions';

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: "",
    error: null
}

export const videos = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOS_BY_CATEGORY_REQUESTED:
            return {
                ...state,
                loading: true,
                nextPageToken: ""
            }
        case GET_VIDEOS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.payload.videos,
                nextPageToken: action.payload.nextPageToken
            }
        case GET_VIDEOS_BY_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case GET_VIDEOS_BY_CATEGORY_LOAD_MORE:
            return {
                ...state,
                loading: true
            }
        case GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS:
            const newVideos = action.payload.videos;
            const { videos } = state;
            return {
                ...state,
                loading: false,
                videos: [...videos, ...newVideos],
                nextPageToken: action.payload.nextPageToken
            }
        case GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}