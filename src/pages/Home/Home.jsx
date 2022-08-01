import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies, getGenreList } from 'service/moviesAPI';

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getGenreList().then(r => setGenres(r.data.genres));

    getTrendingMovies().then(response => {
      setTrendingMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <h2>Trending Now</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
