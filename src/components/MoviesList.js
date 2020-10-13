import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    display: 'block',
    width: '100%',
  },
  movieItem: {
    marginBottom: theme.spacing(2),
  },
  movieItemTitle: {
    marginBottom: theme.spacing(1),
  },
}));

const MoviesList = ({ movies }) => {
  const classes = useStyles();

  return (
    <div>
      {movies && movies.length ? (
        <div>
          {movies.map((movie) => {
            console.log(movie);
            return (
              <Grid
                container
                spacing={2}
                wrap="nowrap"
                key={movie.imdbID}
                className={classes.movieItem}
              >
                <Grid item xs={3}>
                  {movie.Poster === 'N/A' ? (
                    <Typography variant="caption">
                      Image not available
                    </Typography>
                  ) : (
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className={classes.img}
                    />
                  )}
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h4" className={classes.movieItemTitle}>
                    {movie.Title}
                  </Typography>
                  <Typography variant="body1">{movie.Year}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </div>
      ) : (
        <Typography variant="body2" align="center">
          No results to display
        </Typography>
      )}
    </div>
  );
};

export default MoviesList;
