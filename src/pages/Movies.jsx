import { Searchbar } from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'components/Services';
import { MovieList } from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (query === null) {
      return;
    }
    const getMovies = async () => {
      try {
        const data = await getSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [query]);
  const handleSubmit = searchQuery => {
    setSearchParams(searchQuery === '' ? {} : { query: searchQuery });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {movies !== null && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
