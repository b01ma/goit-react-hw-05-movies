import {
  searchMovieByQuery,
  getGenreList,
  getTrendingMovies,
} from 'service/moviesAPI';
import { useState, useEffect } from 'react';

// import Cast from './Cast/Cast';
import Movie from './Movie/Movie';
import Navbar from './Navbar/Navbar';
// import Review from './Review/Review';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './Buttons/LoadMoreBtn';
import TrendingMovies from './TrendingMovies/TrendingMovies';

export const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenreList().then(r => setGenres(r.data.genres));
    getTrendingMovies().then(response => {
      setTrendingMovies(response.data.results);
    });
  }, []);

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

  function getQuery(queryWord) {
    setQuery(queryWord);
  }

  function showLoadMoreBtn() {
    if (currentPage < totalPages) {
      return true;
    }
  }

  function handleLoadMore() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
      <Navbar />
      <Searchbar onSubmit={getQuery} />

      <TrendingMovies movies={trendingMovies} />

      {query && <Movie movies={movies} genres={genres} />}
      {showLoadMoreBtn() && <LoadMoreBtn onClick={handleLoadMore} />}

      {/* 
      <Movie />
      <Cast />
      <Review /> */}
    </div>
  );
};
