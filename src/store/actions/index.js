export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';

export const youtubeLibraryLoaded = () => {
    return {
        type: YOUTUBE_LIBRARY_LOADED,
        payload: {
            libraryLoaded: false
        }
    }
}

export const GET_VIDEOS_BY_CATEGORY_REQUESTED = 'GET_VIDEOS_BY_CATEGORY_REQUESTED';
export const GET_VIDEOS_BY_CATEGORY_SUCCESS = 'GET_VIDEOS_BY_CATEGORY_SUCCESS';
export const GET_VIDEOS_BY_CATEGORY_ERROR = 'GET_VIDEOS_BY_CATEGORY_ERROR';

export const getVideosByCategoryRequested = (categoryId) => {
    return {
        type: GET_VIDEOS_BY_CATEGORY_REQUESTED,
        payload: {
            categoryId: categoryId
        }
    };
}

export const GET_VIDEOS_BY_CATEGORY_LOAD_MORE = 'GET_VIDEOS_BY_CATEGORY_LOAD_MORE';

export const getVideosByCategoryLoadMore = (categoryId, token) => {
    return {
        type: GET_VIDEOS_BY_CATEGORY_LOAD_MORE,
        payload: {
            categoryId: categoryId,
            token: token
        }
    }
}

export const GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS = 'GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS';

export const getVideosByCategoryLoadMoreSuccess = (payload) => {
    return {
        type: GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS,
        payload
    }
}

export const GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR = 'GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR';

export const getVideosByCategoryLoadMoreError = (payload) => {
    return {
        type: GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR,
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


export const GET_WATCH_VIDEO_DETAILS_REQUESTED = 'GET_WATCH_VIDEO_DETAILS_REQUESTED';
export const GET_WATCH_VIDEO_DETAILS_SUCCESS = 'GET_WATCH_VIDEO_DETAILS_SUCCESS';
export const GET_WATCH_VIDEO_DETAILS_ERROR = 'GET_WATCH_VIDEO_DETAILS_ERROR';

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

export const searchQueryLoadMore = (query, token) => {
    return {
        type: SEARCH_QUERY_LOAD_MORE,
        payload: {
            query: query,
            token: token
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





