import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  getTrendingMovies,
  getGenreList,
  BASE_IMG_URL,
} from 'service/moviesAPI';
import css from './Home.module.css';

const Home = () => {
  // const [genres, setGenres] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // getGenreList().then(r => setGenres(r.data.genres));

    getTrendingMovies().then(response => {
      setTrendingMovies(response.data.results);
    });
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending Now</h2>
      <ul className={css.movieList}>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <div>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className={css.image}
                    src={`${BASE_IMG_URL}w200${movie.poster_path}`}
                    alt="Poster"
                  />
                </Link>
              </div>
              <div>
                <Link className={css.movieTitle} to={`/movies/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
