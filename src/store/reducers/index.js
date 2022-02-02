import { apiReducer } from './api';
import { videosReducer } from './allVideos'
import {combineReducers} from 'redux';

export default combineReducers({
  apiReducer,
  videosReducer
});