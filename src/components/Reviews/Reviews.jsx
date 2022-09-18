import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as movieAPI from 'services/movieAPI';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    try {
      const fetchReviews = async () => {
        const data = await movieAPI.getReviews(movieId);
        if (!data) {
          return;
        }
        setReviews(data.results);
      };

      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>No Reviews</p>
        )}
      </ReviewsList>
    </>
  );
};
export default Reviews;
