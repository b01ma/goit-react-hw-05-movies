import React from 'react';
import { BASE_IMG_URL } from 'service/moviesAPI';

const TrendingMovies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <div>
                  <img
                    src={`${BASE_IMG_URL}w200/${movie.poster_path}`}
                    alt=""
                  />
                </div>
                {movie.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TrendingMovies;
