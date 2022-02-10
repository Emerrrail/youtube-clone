export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';

export const youtubeLibraryLoaded = () => {
    // return createAction.bind(null, YOUTUBE_LIBRARY_LOADED); 
    return {
        type: YOUTUBE_LIBRARY_LOADED,
        payload: {
            libraryLoaded: false
        }
    }
}

export const GET_ALL_POPULAR_VIDEOS_REQUESTED = 'GET_ALL_POPULAR_VIDEOS_REQUESTED';
export const GET_ALL_POPULAR_VIDEOS_SUCCESS = 'GET_ALL_POPULAR_VIDEOS_SUCCESS';
export const GET_ALL_POPULAR_VIDEOS_ERROR = 'GET_ALL_POPULAR_VIDEOS_ERROR';

export const getAllPopularVideosRequested = () => {
    return {
        type: GET_ALL_POPULAR_VIDEOS_REQUESTED
    };
}


export const GET_WATCH_VIDEO_DETAILS_REQUESTED = 'GET_WATCH_VIDEO_DETAILS_REQUESTED';

export const getWatchVideoDetailsRequested = (videoId) => {
    return {
        type: GET_WATCH_VIDEO_DETAILS_REQUESTED,
        payload: {
            videoId: videoId
        }
    }
}


export const SEARCH_TERM_REQUESTED = 'SEARCH_TERM_REQUESTED';

export const searchTermRequested = (term) => {
    return {
        type: SEARCH_TERM_REQUESTED,
        payload: {
            term: term
        }
    }
}


export const VIDEO_RENDERED_TAG_SELECTED = 'VIDEO_RENDERED_TAG_SELECTED';

export const videoRenderedTagSelected = (tag, categoryId) => {
    return {
        type: VIDEO_RENDERED_TAG_SELECTED,
        payload: {
            selectedTag: tag,
            categoryId: categoryId
        }
    }
}

export const videoSelected = (video) => {
    return {
        type: 'VIDEO_SELECTED',
        payload: {
            video: video
        }
    }
}


