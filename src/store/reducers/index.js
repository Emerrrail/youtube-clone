import { apiReducer } from './api';
import { videos } from './videos'
import { watchVideo } from './watchVideo';
import { tagSelected } from './tagSelected';
import { combineReducers } from 'redux';
import { searchQuery } from './searchQuery';

export default combineReducers({
  apiReducer,
  videos,
  watchVideo,
  tagSelected,
  searchQuery,
});