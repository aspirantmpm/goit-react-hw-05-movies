import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieCast = lazy(() => import('pages/MovieCast'));
const MovieReviews = lazy(() => import('pages/MovieReviews'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
