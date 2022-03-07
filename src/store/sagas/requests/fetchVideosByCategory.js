import youtube from '../../../apis/youtube';
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_VIDEOS_BY_CATEGORY_REQUESTED, GET_VIDEOS_BY_CATEGORY_SUCCESS, GET_VIDEOS_BY_CATEGORY_ERROR } from '../../actions';

export function* watcherVideosSaga() {
  yield takeEvery(GET_VIDEOS_BY_CATEGORY_REQUESTED, fetchVideosByCategory);
}

export function* fetchVideosByCategory(action) {
  const { payload } = action;
  try {
    const { data } = yield call(getApi, payload.categoryId);
    console.log(data, "API data")
    yield put(getVideosSuccess(data));
  } catch (error) {
    yield put(getVideosError(error.message));
  }
}


const getApi = async (categoryId) => {
  const response = await youtube.get('/videos', {
    params: {
      part: "snippet, contentDetails, statistics",
      chart: "mostPopular",
      maxResults: 16,
      regionCode: "TW",
      videoCategoryId: categoryId
    }
  });
  return response;
}

export const getVideosSuccess = (data) => {
  console.log('request videos success');
  return {
    type: GET_VIDEOS_BY_CATEGORY_SUCCESS,
    payload: {
      loading: false,
      videos: data.items,
      nextPageToken: data.nextPageToken
    }
  };
};

export const getVideosError = (error) => {
  console.log('request videos error');
  return {
    type: GET_VIDEOS_BY_CATEGORY_ERROR,
    payload: {
      error: error
    }
  };
};


