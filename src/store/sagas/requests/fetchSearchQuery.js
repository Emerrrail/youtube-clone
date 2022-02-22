import youtube from '../../../apis/youtube';
import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { SEARCH_QUERY_LOAD_MORE_SUCCESS, SEARCH_QUERY_REQUESTED } from '../../actions/index';
import { SEARCH_QUERY_LOAD_MORE } from '../../actions/index';


let token = "";


export function* watcherSearchQuerySaga() {
    // while (true) {
    //     const { payload } = yield take(SEARCH_QUERY_REQUESTED);
    //     yield call(fetchSearchQuery, payload.query);
    // }
    yield takeLatest(SEARCH_QUERY_REQUESTED, fetchSearchQuery);
}

export function* watcherSearchQueryLoadMoreSaga() {
    yield takeEvery(SEARCH_QUERY_LOAD_MORE, searchQueryLoadMore);
}


export function* fetchSearchQuery(action) {
    const { payload } = action;
    try {
        const { data } = yield call(getFirstApi, payload.query);
        console.log(data, "API data search query")
        yield put(fetchSearchQuerySuccess(data));
    } catch (error) {
        console.log(error, 'error search query');
        yield put(fetchSearchQueryError(error.message));
    }
}

export function* searchQueryLoadMore(action) {
    const { payload } = action;
    try {
        if (token.length <= 0) {  //讓他第一次、最後沒有token的時候不要打
            return;
        }
        const { data } = yield call(getApi, payload.query);
        yield put(searchQueryLoadMoreSuccess(data));
    } catch (error) {
        console.log(error, 'error load more');
        yield put(searchQueryLoadMoreError(error.message));
    }
}

const getFirstApi = async (query) => {
    const response = await youtube.get('/search', {
        params: {
            part: "snippet",
            q: query
        }
    });
    // response
    return response;
}
const getApi = async (query) => {
    const response = await youtube.get('/search', {
        params: {
            part: "snippet",
            pageToken: token,
            q: query
        }
    });
    return response;
}

export const fetchSearchQuerySuccess = (data) => {
    console.log('request videos success');

    token = data.nextPageToken;

    return {
        type: 'SEARCH_QUERY_SUCCESS',
        payload: {
            loading: false,
            results: data.items,
            nextPageToken: token,
            error: null
        }
    };
};

export const fetchSearchQueryError = (error) => {
    console.log('request videos error');
    return {
        type: 'SEARCH_QUERY_ERROR',
        payload: {
            results: [],
            nextPageToken: '',
            error: error
        }
    };
};

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