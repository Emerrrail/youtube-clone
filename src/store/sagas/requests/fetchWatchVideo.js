import youtube from '../../../apis/youtube';
import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_WATCH_VIDEO_DETAILS_REQUESTED } from '../../actions/index';
// import { watchVideo } from '../../reducers/watchVideo';


export function* watcherWatchVideoSaga() {
    while (true) {
        const { payload } = yield take(GET_WATCH_VIDEO_DETAILS_REQUESTED);
        yield call(fetchWatchVideo, payload.videoId);
    }
}

export function* fetchWatchVideo(videoId) {
    try {
        const { data } = yield call(getApi, videoId);
        console.log(data, "API data")
        yield put(fetchWatchVideoSuccess(data));
    } catch (error) {
        console.log(error, 'error');
        yield put(fetchWatchVideoError(error.message));
    }
}


const getApi = async (videoId) => {
    const response = await youtube.get('/videos', {
        params: {
            part: "snippet, contentDetails, statistics",
            id: videoId
        }
    });
    console.log(response, 'getApi end with response');

    return response;
}

export const fetchWatchVideoSuccess = (data) => {
    console.log('request videos success');
    return {
        type: 'GET_WATCH_VIDEO_DETAILS_SUCCESS',
        payload: {
            loading: false,
            video: data.items,
            error: null
        }
    };
};

export const fetchWatchVideoError = (error) => {
    console.log('request videos error');
    return {
        type: 'GET_WATCH_VIDEO_DETAILS_ERROR',
        error: error
    };
};