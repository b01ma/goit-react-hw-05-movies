import { Route, Routes, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
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
import MovieDetails from '../pages/MovieDetails';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { keyWord, page } = params;

  // console.log(query, page);

  const [query, setQuery] = useState(keyWord);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (query) {
      loadMovies();
    }

    setSearchParams({
      keyWord: query,
      page: currentPage,
    });

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

  function getQuery(queryWord) {
    setQuery(queryWord);
    setMovies([]);
  }

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
        <Route path="movies" element={<Movies movies={movies} />}>
          <Route index element={<Searchbar onSearch={getQuery} />} />
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
