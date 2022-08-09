import axios from 'axios';

const KEY = 'e50a0796fa32a6e301b6994e783be864';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const searchMovieByQuery = (query, page = 1) =>
  axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&page=${page}&include_adult=false`
  );

export const getGenreList = () =>
  axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}&language=en-US`);

export const getTrendingMovies = () =>
  axios.get(`${BASE_URL}trending/all/week?api_key=${KEY}`);

export const getMovieDetails = movieId =>
  axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}`);

export const getMovieReviews = movieId =>
  axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`);

export const getMovieCast = movieId =>
  axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`);

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
