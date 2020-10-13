import apiCall from './apiCall';
import store from '../store';

export const findMovies = async () => {
  const { movies } = store.getState();

  return await apiCall(
    `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
    {
      method: 'get',
      params: {
        s: movies.query,
      },
    }
  );
};
