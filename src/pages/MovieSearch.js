import { Typography } from '@material-ui/core';
import React from 'react';
import SearchForm from '../components/SearchForm';

function MovieSearch() {
  return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Movie search
      </Typography>
      <SearchForm />
    </>
  );
}

export default MovieSearch;
