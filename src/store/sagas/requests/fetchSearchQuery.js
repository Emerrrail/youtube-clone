import youtube from '../../../apis/youtube';
import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { SEARCH_QUERY_REQUESTED } from '../../actions/index';



export function* watcherSearchQuerySaga() {
    // while (true) {
    //     const { payload } = yield take(SEARCH_QUERY_REQUESTED);
    //     yield call(fetchSearchQuery, payload.query);
    // }
    yield takeLatest(SEARCH_QUERY_REQUESTED, fetchSearchQuery);
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

export const fetchSearchQuerySuccess = (data) => {
    console.log('request videos success');

    return {
        type: 'SEARCH_QUERY_SUCCESS',
        payload: {
            loading: false,
            results: data.items,
            nextPageToken: data.nextPageToken,
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
