import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/Services';
import { useEffect, useState } from 'react';
import {
  Username,
  Text,
  ItemReviews,
  Reviews,
  EmptyReviews,
} from '../components/Globalstyle';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  return (
    <>
      {reviews.length !== 0 ? (
        <Reviews>
          {reviews.map(({ author, content }) => {
            return (
              <ItemReviews key={author}>
                <Username>{author}</Username>
                <Text>{content}</Text>
              </ItemReviews>
            );
          })}
        </Reviews>
      ) : (
        <EmptyReviews>We don't have any reviews for this movie.</EmptyReviews>
      )}
    </>
  );
};

export default MovieReviews;
