import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    query: '',
    list: [],
  },
  reducers: {
    fetch: (state, action) => {
      state.query = action.payload;
    },
    fetched: (state, action) => {
      state.list = action.moviesList;
    },
    fetchFailed: (message) => {
      console.log('Movies fetch failed', message);
    },
  },
});

export const { fetch } = moviesSlice.actions;
export const movies = (state) => state.movies.list;
export const query = (state) => state.movies.query;

export default moviesSlice.reducer;
