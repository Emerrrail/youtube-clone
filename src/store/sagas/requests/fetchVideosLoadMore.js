import youtube from '../../../apis/youtube';
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_VIDEOS_BY_CATEGORY_LOAD_MORE, GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS, GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR } from '../../actions';

export function* watcherVideosLoadMoreSaga() {
    yield takeEvery(GET_VIDEOS_BY_CATEGORY_LOAD_MORE, fetchVideosLoadMore);
}

export function* fetchVideosLoadMore(action) {
    const { payload } = action;
    console.log(payload.token);
    try {
        if (payload.token.length <= 0 || !payload.token) {  //讓他第一次、最後沒有token的時候不要打
            return;
        }
        const { data } = yield call(getApi, ...[payload.categoryId, payload.token]);
        console.log(data, "API data")
        yield put(getVideosLoadMoreSuccess(data));
    } catch (error) {
        yield put(getVideosLoadMoreError(error.message));
    }
}

const getApi = async (categoryId, token) => {
    const response = await youtube.get('/videos', {
        params: {
            part: "snippet, contentDetails, statistics",
            chart: "mostPopular",
            maxResults: 16,
            regionCode: "TW",
            videoCategoryId: categoryId,
            pageToken: token
        }
    });
    return response;
}

export const getVideosLoadMoreSuccess = (data) => {
    console.log('request videos success');
    return {
        type: GET_VIDEOS_BY_CATEGORY_LOAD_MORE_SUCCESS,
        payload: {
            loading: false,
            videos: data.items,
            nextPageToken: data.nextPageToken
        }
    };
};

export const getVideosLoadMoreError = (error) => {
    console.log('request videos error');
    return {
        type: GET_VIDEOS_BY_CATEGORY_LOAD_MORE_ERROR,
        payload: {
            error: error
        }
    };
};