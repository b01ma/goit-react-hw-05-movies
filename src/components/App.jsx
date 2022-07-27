// import { searchMovies } from 'service/moviesAPI';
// import { useEffect } from 'react';

import Cast from './Cast/Cast';
import Movie from './Movie/Movie';
import Navbar from './Navbar/Navbar';
import Review from './Review/Review';
import Searchbar from './Searchbar/Searchbar';
import TrendingMovies from './TrendingMovies/TrendingMovies';

export const App = () => {
  const moviesTest = [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
  ];
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
      <Searchbar />
      <TrendingMovies movies={moviesTest} />
      <Movie />
      <Cast />
      <Review />
    </div>
  );
};
