import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { movies } from '../store/moviesSlice';

function MovieSearch() {
  const moviesResult = useSelector(movies);

  return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Movie search
      </Typography>
      <SearchForm />
      <MoviesList movies={moviesResult} />
    </>
  );
}

export default MovieSearch;
