import {GET_ALL_POPULAR_VIDEOS_REQUESTED, GET_ALL_POPULAR_VIDEOS_SUCCESS, GET_ALL_POPULAR_VIDEOS_ERROR} from '../actions/api';

const initialState = {
    videos: [],
    loading: false,
    error: null
}

export const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POPULAR_VIDEOS_REQUESTED:
            return {...state, loading: true}
        case GET_ALL_POPULAR_VIDEOS_SUCCESS:
            return {...state, loading: false, videos: action.payload.videos}
        case GET_ALL_POPULAR_VIDEOS_ERROR:
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}