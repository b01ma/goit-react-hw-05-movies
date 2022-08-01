import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  searchMovieByQuery,
  getGenreList,
  getTrendingMovies,
} from 'service/moviesAPI';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Navbar from './Navbar';
import PageNotFound from 'pages/PageNotFound';
import Cast from './Cast';
import Reviews from './Reviews';
import MovieDetails from './MovieDetails';

export const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (query) {
      loadMovies();
    }

    function loadMovies() {
      // setIsLoading(true);

      searchMovieByQuery(query, currentPage)
        .then(response => {
          console.log(response.data);
          setMovies(movies => [...movies, ...response.data.results]);
          setTotalPages(response.data.total_pages);
        })
        .catch(e => {
          console.log('error:', e.message);
        })
        .finally(() => {
          // setIsLoading(false);
        });
    }
  }, [query, currentPage]);

  // function getQuery(queryWord) {
  //   setQuery(queryWord);
  //   setMovies([]);
  // }

  // function showLoadMoreBtn() {
  //   if (currentPage < totalPages) {
  //     return true;
  //   }
  // }

  // function handleLoadMore() {
  //   setCurrentPage(currentPage + 1);
  // }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
