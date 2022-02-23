import youtube from '../../../apis/youtube';
import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { SEARCH_QUERY_LOAD_MORE } from '../../actions/index';

let token = "";

export function* watcherSearchQueryLoadMoreSaga() {
    yield takeEvery(SEARCH_QUERY_LOAD_MORE, searchQueryLoadMore);
}

export function* searchQueryLoadMore(action) {
    const { payload } = action;
    console.log(payload.firstToken);
    try {
        if (payload.firstToken.length <= 0) {  //讓他第一次、最後沒有token的時候不要打
            return;
        }
        const { data } = yield call(getApi, ...[payload.query, payload.firstToken]);
        yield put(searchQueryLoadMoreSuccess(data));
    } catch (error) {
        console.log(error, 'error load more');
        yield put(searchQueryLoadMoreError(error.message));
    }
}

const getApi = async (query, firstToken) => {
    console.log(firstToken, 'getApi');
    const response = await youtube.get('/search', {
        params: {
            part: "snippet",
            pageToken: firstToken,
            q: query
        }
    });
    return response;
}

export const searchQueryLoadMoreSuccess = (data) => {
    console.log(data, 'load more success');

    token = data.nextPageToken;

    return {
        type: 'SEARCH_QUERY_LOAD_MORE_SUCCESS',
        payload: {
            loading: false,
            results: data.items,
            nextPageToken: token,
            error: null
        }
    }
}

export const searchQueryLoadMoreError = (error) => {
    console.log('load more error');

    return {
        type: 'SEARCH_QUERY_LOAD_MORE_ERROR',
        payload: {
            results: [],
            nextPageToken: '',
            error: error
        }
    }
}