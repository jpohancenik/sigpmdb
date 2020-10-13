import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { findMovie } from '../utils/findMovie';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { isInFavs, addToFavs, removeFromFavs } from '../utils/favorites';

const useStyles = makeStyles((theme) => ({
  img: {
    display: 'block',
    width: '100%',
  },
  topBar: {
    marginBottom: theme.spacing(3),
    textAlign: 'right',
  },
  movieItemTitle: {
    marginBottom: theme.spacing(1),
  },
  movieItemParam: {
    marginBottom: theme.spacing(1),
    color: '#555',
  },
  movieMain: {
    marginBottom: theme.spacing(3),
  },
}));

function MovieDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [movieFav, setMovieFav] = useState(false);

  useEffect(() => {
    getMovie(id);
  }, [id]);

  const getMovie = async (id) => {
    const response = await findMovie(id);
    if (response && response.status === 200) {
      setMovieData(response.data);
      if (isInFavs(response.data.imdbID)) {
        setMovieFav(true);
      }
    }
    return null;
  };

  const handleAddToFavs = () => {
    addToFavs(movieData);
    setMovieFav(true);
  };

  const handleRemoveFromFavs = () => {
    removeFromFavs(movieData.imdbID);
    setMovieFav(false);
  };

  return (
    <div>
      <div className={classes.topBar}>
        <Link to="/">Back to movie search</Link>
      </div>
      {movieData && (
        <>
          <Grid container spacing={2} className={classes.movieMain}>
            <Grid item xs={12} sm={5}>
              {movieData.Poster === 'N/A' ? (
                <Typography variant="caption">Image not available</Typography>
              ) : (
                <img
                  src={movieData.Poster}
                  alt={movieData.Title}
                  className={classes.img}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h4" className={classes.movieItemTitle}>
                {movieData.Title}
              </Typography>
              <Typography variant="body1" className={classes.movieItemParam}>
                {movieData.Year}, {movieData.Genre}, {movieData.Runtime}
              </Typography>
              <Typography variant="body2" className={classes.movieItemParam}>
                {movieData.Writer}
              </Typography>
              <Typography variant="body2" className={classes.movieItemParam}>
                Starring: {movieData.Actors}
              </Typography>
              <div>
                {movieFav ? (
                  <Button
                    type="button"
                    variant="contained"
                    title="Remove from favorites"
                    onClick={handleRemoveFromFavs}
                  >
                    <Star />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="contained"
                    title="Add to favorites"
                    onClick={handleAddToFavs}
                  >
                    <StarBorder />
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
          <Typography variant="body1">{movieData.Plot}</Typography>
        </>
      )}
      {!movieData && (
        <Typography variant="body2" align="center">
          Loading movie data
        </Typography>
      )}
    </div>
  );
}

export default MovieDetail;
