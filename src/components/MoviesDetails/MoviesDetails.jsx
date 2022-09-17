import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { BackButton } from 'components/BackButton/BackButton';
import * as movieAPI from 'services/movieAPI';

export const MoviesDetails = () => {
  const [details, setDetails] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    
    try {
      const fetchDetails = async () => {
        const data = await movieAPI.getDetails(movieId);
        if (!data) {
          return;
        }
        setDetails(data);
      };

      fetchDetails();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const genresToString = ({ genres }) => {
    if (genres) {
      // console.log(genres);
      return genres.map(genre => genre.name);
    }
    return [];
  };

  if(!details) {
    return
  }
  // console.log(details);
  // console.log(details.genres);
  return (
    <>  
    <BackButton />
      <div>
        <img
          width="400px"
          height="500px"
          src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
          alt=""
        />
        <h2>{details.title} <span>{`(${details.release_date.slice(0, 4)})`}</span></h2>
        <p>User score: {details.vote_average.toFixed(1) * 10}%</p>
        <h3>Overview</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>
        <p>{genresToString(details).join(', ')}</p>
      </div>
      <div>
        <h2>Additional info</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  );
};
