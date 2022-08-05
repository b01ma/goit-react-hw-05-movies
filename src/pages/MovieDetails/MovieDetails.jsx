// import React, { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, Outlet } from 'react-router-dom';
import { BASE_IMG_URL, getMovieDetails } from 'service/moviesAPI';

const MovieDetails = ({ movies, genres }) => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(result => setMovie(result.data));
  }, [movieId]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  // console.log(movies);

  // const movieGenres = (genreIdArray), allGenres) => {
  //   console.log('genreIdArray:', genreIdArray);
  //   console.log('allGenres:', allGenres);

  //   allGenres.reduce((matchedGenres, genre) => {
  //     if (genreIdArray.includes(genre.id)) {
  //       console.log('genreId matched', genre.id);
  //       console.log('genreId name:', genre.name);

  //       // return matchedGenres.push(genre.name);
  //     }

  //     return matchedGenres;
  //   }, []);
  // };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>

      <h2>Movie Details</h2>
      {movie && (
        <div>
          <li key={movie.id}>
            <div>
              <img
                src={`${BASE_IMG_URL}w200${movie.poster_path}`}
                alt="Poster"
              />
            </div>
            <div>
              <h2>Title</h2>
              <p>{movie.original_title}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <ul></ul>
            </div>
            <div>
              <h5>Additional Information</h5>
              <ul>
                <li>
                  <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`/movies/${movieId}/review`}>Review</Link>
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
