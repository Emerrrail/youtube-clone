import {all} from 'redux-saga/effects';
import { videosReducer } from '../reducers/videos';
import { watcherVideosSaga } from "./requests/fetchAllVideos"
import { watcherWatchVideoSaga } from './requests/fetchWatchVideo';
import { watcherSearchTermSaga } from './requests/fetchSearchTerm';

export default function* rootSaga(){
  yield all([
    watcherVideosSaga(), watcherWatchVideoSaga(), watcherSearchTermSaga()
  ]);
}