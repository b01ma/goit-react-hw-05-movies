import axios from 'axios';

const KEY = 'e50a0796fa32a6e301b6994e783be864';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const searchMovieByQuery = (query, page = 1) =>
  axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&page=${page}&include_adult=true`
  );

export const getGenreList = () =>
  axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}&language=en-US`);

export const getTrendingMovies = () =>
  axios.get(`${BASE_URL}trending/all/week?api_key=${KEY}`);
