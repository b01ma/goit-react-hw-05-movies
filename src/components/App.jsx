import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';

import Navbar from './Navbar';
import PageNotFound from 'pages/PageNotFound';
import Searchbar from './Searchbar';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <div className={css.container}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};
