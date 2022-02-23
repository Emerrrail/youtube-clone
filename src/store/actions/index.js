export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';

export const youtubeLibraryLoaded = () => {
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


export const SEARCH_QUERY_REQUESTED = 'SEARCH_QUERY_REQUESTED';

export const searchQueryRequested = (query) => {
    return {
        type: SEARCH_QUERY_REQUESTED,
        payload: {
            query: query,
        }
    }
}

export const SEARCH_QUERY_SUCCESS = 'SEARCH_QUERY_SUCCESS';

export const searchQuerySuccess = (payload) => {
    return {
        type: SEARCH_QUERY_SUCCESS,
        payload
    }
}

export const SEARCH_QUERY_ERROR = 'SEARCH_QUERY_ERROR';

export const searchQueryError = (payload) => {
    return {
        type: SEARCH_QUERY_ERROR,
        payload
    }
}

export const SEARCH_QUERY_LOAD_MORE = 'SEARCH_QUERY_LOAD_MORE';

export const searchQueryLoadMore = (query, firstToken) => {
    return {
        type: SEARCH_QUERY_LOAD_MORE,
        payload: {
            query: query,
            firstToken: firstToken
        }
    }
}

export const SEARCH_QUERY_LOAD_MORE_SUCCESS = 'SEARCH_QUERY_LOAD_MORE_SUCCESS';

export const searchQueryLoadMoreSuccess = (payload) => {
    return {
        type: SEARCH_QUERY_LOAD_MORE_SUCCESS,
        payload
    }
}

export const SEARCH_QUERY_LOAD_MORE_ERROR = 'SEARCH_QUERY_LOAD_MORE_ERROR';

export const searchQueryLoadMoreError = (payload) => {
    return {
        type: SEARCH_QUERY_LOAD_MORE_ERROR,
        payload
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



