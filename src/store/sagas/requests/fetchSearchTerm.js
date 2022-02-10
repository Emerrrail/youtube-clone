import youtube from '../../../apis/youtube';
import { call, put, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { SEARCH_TERM_REQUESTED } from '../../actions/index';

export function* watcherSearchTermSaga() {
    while (true) {
        const { payload } = yield take(SEARCH_TERM_REQUESTED);
        yield call(fetchSearchTerm, payload.term);
    }
}

export function* fetchSearchTerm(term) {
    try {
        const { data } = yield call(getApi, term);
        console.log(data, "API data search term")
        yield put(fetchSearchTermSuccess(data));
    } catch (error) {
        console.log(error, 'error search term');
        yield put(fetchSearchTermError(error.message));
    }
}


const getApi = async (term) => {
    const response = await youtube.get('/search', {
        params: {
            part: "snippet",
            maxResult: 25,
            q: term 
        }
    });
    console.log(response, 'getApi end with response');

    return response;
}

export const fetchSearchTermSuccess = (data) => {
    console.log('request videos success');
    return {
        type: 'SEARCH_TERM_SUCCESS',
        payload: {
            loading: false,
            result: data.items,
            error: null
        }
    };
};

export const fetchSearchTermError = (error) => {
    console.log('request videos error');
    return {
        type: 'SEARCH_TERM_ERROR',
        error: error
    };
};