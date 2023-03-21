import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import {
  Info,
  Img,
  SubInfo,
  InfoWrapper,
  Text,
  AdditionalLink,
  MovieName,
  TitleInfo,
} from './Globalstyle';
import poster from 'images/no_movie_pic.png';

export const MovieInfo = ({ movie }) => {
  return (
    <>
      <Info>
        <Img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : poster
          }
          alt=""
        />
        <InfoWrapper>
          <div>
            <MovieName>
              {movie.title} {`(${movie.release_date.slice(0, 4)})`}
            </MovieName>
            <Text>User score: {Math.round(movie.vote_average * 10)}%</Text>
          </div>
          <div>
            <TitleInfo>Overview</TitleInfo>
            <Text>{movie.overview}</Text>
          </div>
          <div>
            <TitleInfo>Genres</TitleInfo>
            <Text>{movie.genres.map(genre => genre.name).join()}</Text>
          </div>
        </InfoWrapper>
      </Info>
      <SubInfo>
        <AdditionalLink to="cast">Cast</AdditionalLink>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
      </SubInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
