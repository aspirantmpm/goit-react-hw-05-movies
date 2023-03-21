import axios from 'axios';

const API_KEY = '2a9c1d08031f8c725807d91372c6f53b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getMovies(endpoint, query = '') {
  const response = await axios.get(endpoint);
  return response.data;
}

export function getTrendingMovies() {
  return getMovies(`/trending/movie/day?api_key=${API_KEY}`);
}

export function getSearchMovies(query) {
  return getMovies(`/search/movie?api_key=${API_KEY}&query=${query}`);
}

export function getSingleMovie(movieId) {
  return getMovies(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function getMovieCredits(movieId) {
  return getMovies(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function getMovieReviews(movieId) {
  return getMovies(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}
