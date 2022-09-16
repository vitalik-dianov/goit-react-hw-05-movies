import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as movieAPI from 'services/movieAPI';

export const Cast = () => {
  const { movieId } = useParams();

  const [credits, setCredits] = useState([]);
  useEffect(() => {
    try {
      const fetchReviews = async () => {
        const data = await movieAPI.getCredits(movieId);
        if (!data) {
          return;
        }
        // console.log(data);
        setCredits(data.cast.slice(0, 10));
      };

      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  //   console.log(reviews);
  return (
    <>
      <h3>Cast</h3>
      <ul>
        {credits.map(credit => {
          return (
            <li key={credit.credit_id}>
              <img
              width='100px'
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt=""
              />
              <p>{credit.name}</p>
              <p>Character: {credit.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
