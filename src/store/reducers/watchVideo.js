const initialState = {
    video: [],
    loading: false,
    error: null
}

export const watchVideo = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WATCH_VIDEO_DETAILS_REQUESTED':
            return {...state, loading: true}
        case 'GET_WATCH_VIDEO_DETAILS_SUCCESS':
            return {...state, loading: false, video: action.payload.video, error: null}
        case 'GET_WATCH_VIDEO_DETAILS_ERROR':
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}