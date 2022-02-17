import youtube from '../../../apis/youtube';
import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { SEARCH_TERM_REQUESTED } from '../../actions/index';

export function* watcherSearchQuerySaga() {
    while (true) {
        const { payload } = yield take(SEARCH_TERM_REQUESTED);
        yield call(fetchSearchQuery, payload.query);
    }
}

export function* fetchSearchQuery(query) {
    try {
        const { data } = yield call(getApi, query);
        console.log(data, "API data search query")
        yield put(fetchSearchQuerySuccess(data));
    } catch (error) {
        console.log(error, 'error search query');
        yield put(fetchSearchQueryError(error.message));
    }
}


const getApi = async (query) => {
    const response = await youtube.get('/search', {
        params: {
            part: "snippet",
            maxResult: 25,
            q: query 
        }
    });
    console.log(response, 'getApi end with response');

    return response;
}

export const fetchSearchQuerySuccess = (data) => {
    console.log('request videos success');
    return {
        type: 'SEARCH_TERM_SUCCESS',
        payload: {
            loading: false,
            results: data.items,
            error: null
        }
    };
};

export const fetchSearchQueryError = (error) => {
    console.log('request videos error');
    return {
        type: 'SEARCH_TERM_ERROR',
        error: error
    };
};