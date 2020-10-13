import apiCall from './apiCall';

export const findMovie = async (movieId) => {
  return await apiCall(
    `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
    {
      method: 'get',
      params: {
        i: movieId,
      },
    }
  );
};
