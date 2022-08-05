import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { BASE_IMG_URL } from 'service/moviesAPI';
import css from './Movies.module.css';

const Movies = ({ movies }) => {
  return (
    <div className={css.container}>
      <p>Movies</p>
      <Outlet />
      <ul className={css.movieList}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <div>
                <img
                  src={`${BASE_IMG_URL}w200${movie.poster_path}`}
                  alt="Poster"
                />
              </div>
              <div>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
