import createAction from './index';

export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';
export const youtubeLibraryLoaded = () => {
    return createAction.bind(null, YOUTUBE_LIBRARY_LOADED); 
}