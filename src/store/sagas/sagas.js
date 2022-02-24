import {all} from 'redux-saga/effects';
import { videosReducer } from '../reducers/videos';
import { watcherVideosSaga } from "./requests/fetchVideosByCategory"
import { watcherWatchVideoSaga } from './requests/fetchWatchVideo';
import { watcherSearchQuerySaga } from './requests/fetchSearchQuery';
import { watcherSearchQueryLoadMoreSaga } from './requests/fetchSearchQueryLoadMore';
import { watcherVideosLoadMoreSaga } from './requests/fetchVideosLoadMore'

export default function* rootSaga(){
  yield all([
    watcherVideosSaga(), 
    watcherWatchVideoSaga(), 
    watcherVideosLoadMoreSaga(),
    watcherSearchQuerySaga(),
    watcherSearchQueryLoadMoreSaga()
  ]);
}