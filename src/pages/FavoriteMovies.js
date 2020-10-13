import { Typography } from '@material-ui/core';
import React from 'react';
import MoviesList from '../components/MoviesList';
import { getFavs } from '../utils/favorites';

function FavoriteMovies() {
  const favMovies = getFavs();

  return (
    <>
      <Typography variant="h4" component="h1">
        My favorite movies
      </Typography>
      <MoviesList movies={favMovies} />
    </>
  );
}

export default FavoriteMovies;
