// import { searchMovies } from 'service/moviesAPI';
import { useState, useEffect } from 'react';

import Cast from './Cast/Cast';
import Movie from './Movie/Movie';
import Navbar from './Navbar/Navbar';
import Review from './Review/Review';
import Searchbar from './Searchbar/Searchbar';
import TrendingMovies from './TrendingMovies/TrendingMovies';

export const App = () => {
  const [query, setQuery] = useState('');

  function getQuery(queryWord) {
    setQuery(queryWord);
  }

  // useEffect(() => {
  //   searchMovies('black', 1)
  //     .then(data => {
  //       console.log(data.data.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      <Navbar />
      <Searchbar onSubmit={getQuery} />

      {query && <Movie />}

      {/* <TrendingMovies />
      <Movie />
      <Cast />
      <Review /> */}
    </div>
  );
};
