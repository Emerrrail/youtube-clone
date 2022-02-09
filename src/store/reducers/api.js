import {YOUTUBE_LIBRARY_LOADED} from '../actions';

const initialState = {
  libraryLoaded: false,
};
export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true,
      };
    default:
      return state;
  }
}
export const getYoutubeLibraryLoaded = (state) => state.api.libraryLoaded;  //state.(reducer名稱).LibraryLoaded