import youtube from '../../../apis/youtube';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { videos } from '../../reducers/videos';

export function* watcherVideosSaga() {
  yield takeEvery('GET_ALL_POPULAR_VIDEOS_REQUESTED', fetchAllVideos);
}

export function* fetchAllVideos() {
  try {
    const {data} = yield call(getApi);
    console.log(data, "API data")
    yield put(getVideosSuccess(data));
  } catch (error) {
    yield put(getVIdeosError(error.message));
  }
}


const getApi = async () => {
  const response = await youtube.get('/videos', {
    params: {
      part: "snippet, contentDetails, statistics",
      chart: "mostPopular",
      maxResults: 24,
      regionCode: "TW",
      videoCategoryId: "0"
    }
  });
  return response;
}

export const getVideosSuccess = (data) => {
  console.log('request videos success');
  return {
    type: 'GET_ALL_POPULAR_VIDEOS_SUCCESS',
    payload: {
      loading: false,
      videos: data.items,
    }
  };
};

export const getVIdeosError = (error) => {
  console.log('request videos error');
  return {
    type: 'GET_ALL_POPULAR_VIDEOS_ERROR',
    error: error
  };
};


