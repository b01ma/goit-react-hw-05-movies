import React from 'react';

const TrendingMovies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies &&
          movies.map(movie => {
            return <li key={movie.id}>{movie.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default TrendingMovies;
