import {all} from 'redux-saga/effects';
import { videosReducer } from '../reducers/allVideos';
import { watcherVideosSaga, fetchAllVideos} from "./requests/fetchAllVideos"

export default function* rootSaga(){
  yield all([
    watcherVideosSaga(), fetchAllVideos()
  ]);
}