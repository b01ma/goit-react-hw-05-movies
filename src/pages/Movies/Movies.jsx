import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { BASE_IMG_URL, searchMovieByQuery } from 'service/moviesAPI';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { searchQuery, page } = params;

  useEffect(() => {
    if (searchQuery) {
      searchMovieByQuery(searchQuery, page)
        .then(response => {
          if (page > 1) {
            setMovies(movies => [...movies, ...response.data.results]);
          } else {
            setMovies(response.data.results);
          }
        })
        .catch(e => {
          console.log('error:', e.message);
        })
        .finally(() => {
          // setIsLoading(false);
        });
    }
  }, [searchQuery, page]);

  return (
    <div className={css.container}>
      <Outlet />
      <ul className={css.movieList}>
        {movies?.map(movie => {
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

export default Movies;
