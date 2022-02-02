export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';
export const GET_ALL_POPULAR_VIDEOS_REQUESTED = 'GET_ALL_POPULAR_VIDEOS_REQUESTED';
export const GET_ALL_POPULAR_VIDEOS_SUCCESS = 'GET_ALL_POPULAR_VIDEOS_SUCCESS';
export const GET_ALL_POPULAR_VIDEOS_ERROR = 'GET_ALL_POPULAR_VIDEOS_ERROR';

export const youtubeLibraryLoaded = () => {
    // return createAction.bind(null, YOUTUBE_LIBRARY_LOADED); 
    return {
        type: YOUTUBE_LIBRARY_LOADED,
        payload: {
            libraryLoaded: false
        }
    }
}

export const getAllPopularVideosRequested = () => ({type: GET_ALL_POPULAR_VIDEOS_REQUESTED});
