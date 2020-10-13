import { takeLatest, put } from 'redux-saga/effects';
import { findMovies } from '../utils/findMovies';

function* fetchMovies() {
  try {
    const response = yield findMovies();

    if (response && response.status === 200) {
      if (
        response &&
        response.data &&
        response.data.Response &&
        response.data.Response === 'True'
      ) {
        const moviesList = response.data.Search;
        yield put({ type: 'movies/fetched', moviesList });
      } else {
        yield put({ type: 'movies/fetched', moviesList: [] });
      }
    }
  } catch (e) {
    yield put({ type: 'movies/fetchFailed', message: e.message });
  }
}

function* moviesSaga() {
  yield takeLatest('movies/fetch', fetchMovies);
}

export default moviesSaga;
