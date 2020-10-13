import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import createSagaMiddleware from 'redux-saga';
import moviesSaga from '../sagas';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(moviesSaga);

export default store;
