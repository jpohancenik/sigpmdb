import apiCall from './apiCall';

export const findMovies = async (query) => {
  const response = await apiCall(
    `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
    {
      method: 'get',
      params: {
        s: query,
      },
    }
  );

  console.log(response);
};
