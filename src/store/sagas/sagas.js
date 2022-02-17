import {all} from 'redux-saga/effects';
import { videosReducer } from '../reducers/videos';
import { watcherVideosSaga } from "./requests/fetchAllVideos"
import { watcherWatchVideoSaga } from './requests/fetchWatchVideo';
import { watcherSearchQuerySaga } from './requests/fetchSearchQuery';

export default function* rootSaga(){
  yield all([
    watcherVideosSaga(), watcherWatchVideoSaga(), watcherSearchQuerySaga()
  ]);
}