// import React, { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams, Outlet } from 'react-router-dom';
import { BASE_IMG_URL, getMovieDetails } from 'service/moviesAPI';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(result => setMovie(result.data));
  }, [movieId]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className={css.button} type="button" onClick={handleGoBack}>
        Go back
      </button>

      <h2 className={css.title}>Movie Details</h2>
      {movie && (
        <div>
          <li key={movie.id}>
            <div className={css.wrapper}>
              <div>
                <img
                  src={`${BASE_IMG_URL}w200${movie.poster_path}`}
                  alt="Poster"
                />
              </div>
              <div className={css.basicInfo}>
                <h2>Title</h2>
                <p>{movie.original_title}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h5>
                  Genres:
                  {movie.genres.map(genre => {
                    return <span key={genre.id}> {genre.name}</span>;
                  })}
                </h5>
                <ul></ul>
              </div>
            </div>
            <div className={css.additionalInfo}>
              <h5>Additional Information</h5>
              <ul>
                <li>
                  <NavLink to={`/movies/${movieId}/cast`} replace>
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/movies/${movieId}/review`} replace>
                    Review
                  </NavLink>
                </li>
              </ul>
              <Outlet />
            </div>
          </li>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
