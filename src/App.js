import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieSearch from './pages/MovieSearch';
import FavoriteMovies from './pages/FavoriteMovies';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header />
        <Container fixed>
          <Switch>
            <Route path="/detail">
              <MovieDetail />
            </Route>
            <Route path="/favorites">
              <FavoriteMovies />
            </Route>
            <Route path="*">
              <MovieSearch />
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
