const lsFavsKey = 'favs';

export const getFavs = () => {
  const lsFavs = window.localStorage.getItem(lsFavsKey);
  return lsFavs && JSON.parse(lsFavs);
};

export const isInFavs = (id) => {
  if (!id) {
    return false;
  }
  let favsAsArray = false;
  const lsFavs = window.localStorage.getItem(lsFavsKey);
  if (lsFavs) {
    favsAsArray = JSON.parse(lsFavs);
  }

  if (favsAsArray) {
    return favsAsArray.find((item) => item.imdbID === id);
  }

  return false;
};

export const addToFavs = (movie) => {
  const { imdbID, Poster, Title, Year } = movie;

  if (!isInFavs(movie.imdbID)) {
    let favs = getFavs();
    if (favs) {
      const { imdbID, Poster, Title, Year } = movie;
      favs.push({
        imdbID,
        Poster,
        Title,
        Year,
      });
    } else {
      favs = [
        {
          imdbID,
          Poster,
          Title,
          Year,
        },
      ];
    }
    window.localStorage.setItem(lsFavsKey, JSON.stringify(favs));
  }
};

export const removeFromFavs = (id) => {
  const favs = getFavs();
  if (favs) {
    const favsWoRemoved = favs.filter((fav) => fav.imdbID !== id);
    window.localStorage.setItem(lsFavsKey, JSON.stringify(favsWoRemoved));
  }
};
