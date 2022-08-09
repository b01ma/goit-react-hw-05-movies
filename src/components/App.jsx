import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Navbar from './Navbar';
import PageNotFound from 'pages/PageNotFound';
import Cast from './Cast';
import Reviews from './Reviews';
import MovieDetails from '../pages/MovieDetails';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  // const [genres, setGenres] = useState([]);

  // function showLoadMoreBtn() {
  //   if (currentPage < totalPages) {
  //     return true;
  //   }
  // }

  // function handleLoadMore() {
  //   setCurrentPage(currentPage + 1);
  // }

  return (
    <div className={css.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<Searchbar />} />
        </Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
