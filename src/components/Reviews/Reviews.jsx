import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as movieAPI from 'services/movieAPI';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    try {
      const fetchReviews = async () => {
        const data = await movieAPI.getReviews(movieId);
        if (!data) {
          return;
        }
        // console.log(data);
        setReviews(data.results);
      };

      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
//   console.log(reviews);
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
