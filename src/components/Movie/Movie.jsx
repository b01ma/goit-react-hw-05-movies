// import React, { useEffect } from 'react';
import { BASE_IMG_URL } from 'service/moviesAPI';

const Movie = ({ movies, genres }) => {
  // console.log(movies);

  // const movieGenres = (genreIdArray, allGenres) => {
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

  console.log(genres);

  return (
    <ul>
      {movies?.map(movie => {
        return (
          <li key={movie.id}>
            <div>
              <img
                src={`${BASE_IMG_URL}w200/${movie.poster_path}`}
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
                <li>Cast</li>
                <li>Review</li>
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Movie;
