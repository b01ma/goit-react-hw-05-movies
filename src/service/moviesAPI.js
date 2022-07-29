import axios from 'axios';

const KEY = 'e50a0796fa32a6e301b6994e783be864';
const BASE_URL = 'https://api.themoviedb.org';

export const searchMovieByQuery = (query, page = 1) =>
  axios.get(
    `${BASE_URL}/3/search/company?api_key=${KEY}&query=${query}&page=${page}`
  );
