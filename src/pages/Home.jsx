import { useEffect, useState } from 'react';
// import axios from 'axios';
import { getTrendingMovies } from 'components/Services';
import { MovieList } from '../components/MoviesList';
import { Title, HomeWrapper } from '../components/Globalstyle';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);
  return (
    <HomeWrapper>
      <Title>Trending today:</Title>
      <MovieList movies={movies} />
    </HomeWrapper>
  );
};

export default Home;
