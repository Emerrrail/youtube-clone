import { apiReducer } from './api';
import { videos } from './videos'
import { watchVideo } from './watchVideo';
import { tagSelected } from './tagSelected';
import { videoSelected } from './videoSelected';
import { combineReducers } from 'redux';

export default combineReducers({
  apiReducer,
  videos,
  watchVideo,
  tagSelected,
  videoSelected
});