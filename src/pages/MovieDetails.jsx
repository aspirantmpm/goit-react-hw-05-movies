import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getSingleMovie } from 'components/Services';
import { MovieInfo } from '../components/Movieinfo';
import { LinkBack } from '../components/Globalstyle';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getSingleMovie(id);
        setMovie(data);
      } catch (error) {
        navigate('*');
        console.log(error);
      }
    };
    getMovie();
  }, [id, navigate]);
  return (
    <>
      <LinkBack to={backLinkRef.current}>
        <AiOutlineArrowLeft size={16} />
        Go back
      </LinkBack>
      {movie && <MovieInfo movie={movie} />}
    </>
  );
};

export default MovieDetails;
