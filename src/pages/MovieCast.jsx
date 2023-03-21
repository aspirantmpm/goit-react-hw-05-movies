import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Services';
import { useEffect, useState } from 'react';
import profile from 'images/no_chel_pic.png';
import {
  ProfileImg,
  Cast,
  Item,
  Name,
  Character,
  CastEmpty,
} from '../components/Globalstyle';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  return (
    <>
      {cast.length !== 0 ? (
        <Cast>
          {cast.map(({ name, character, profile_path }) => {
            return (
              <Item key={name}>
                <ProfileImg
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/original/${profile_path}`
                      : profile
                  }
                  alt={name}
                />
                <Name>{name}</Name>
                <Character>Character: {character}</Character>
              </Item>
            );
          })}
        </Cast>
      ) : (
        <CastEmpty>We don't have any cast for this movie.</CastEmpty>
      )}
    </>
  );
};

export default MovieCast;
