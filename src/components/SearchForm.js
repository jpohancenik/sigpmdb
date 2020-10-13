import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, TextField, Fab, Grid } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { query, fetch } from '../store/moviesSlice';

function SearchForm() {
  const moviesQuery = useSelector(query);
  const [inputQuery, setInputQuery] = useState(moviesQuery);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputQuery.length > 0) {
      dispatch(fetch(inputQuery));
    }
  };

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={8}>
            <TextField
              fullWidth
              value={inputQuery}
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
