import React, { useState } from 'react';
import { FormGroup, TextField, Fab, Grid } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { findMovies } from '../utils/findMovies';

function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    if (query.length > 0) {
      const result = await findMovies(query);
      console.log(result);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={8}>
            <TextField
              fullWidth
              value={query}
              onChange={handleChange}
              placeholder="Enter movie name"
            />
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="submit" type="submit">
              <Send />
            </Fab>
          </Grid>
        </Grid>
      </FormGroup>
    </form>
  );
}

export default SearchForm;
