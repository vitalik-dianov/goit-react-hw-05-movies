import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as movieAPI from 'services/movieAPI';
import { CastList, CharacterName } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    try {
      const fetchReviews = async () => {
        const data = await movieAPI.getCredits(movieId);
        if (!data) {
          return;
        }
        setCredits(data.cast.slice(0, 10));
      };

      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <>
      <CastList>
        {credits.map(credit => {
          return (
            <li key={credit.credit_id}>
              <img
                width="150px"
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt=""
              />
              <p>{credit.name}</p>
              <p>Character:</p>
              <CharacterName>{credit.character}</CharacterName>
            </li>
          );
        })}
      </CastList>
    </>
  );
};
export default Cast;
