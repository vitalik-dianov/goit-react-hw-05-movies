import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import * as movieAPI from 'services/movieAPI';
import { Box } from 'services/Box';
import { theme } from '../../theme';
import { IconContext } from 'react-icons';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { BackButton } from 'components/BackButton/BackButton';
import {
  AdditionalLink,
  LinkList,
  Main,
} from 'pages/MoviesDetails/MovieDetails.styled';

const MoviesDetails = () => {
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
      return genres.map(genre => genre.name);
    }
    return [];
  };

  if (!details) {
    return;
  }
  return (
    <Main>
      <Box minWidth={8} maxWidth={10} pl={7} pr={7} ml="auto" mr="auto">
        <Box display="flex" gridGap={5}>
          <IconContext.Provider
            value={{ size: '50px', color: theme.colors.backgroundGray }}
          >
            <BackButton>
              <IoChevronBackCircleOutline />
            </BackButton>
          </IconContext.Provider>
          <img
            width="400px"
            height="500px"
            src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
            alt=""
          />
          <Box>
            <h2>
              {details.title}{' '}
              <span>{`(${details.release_date.slice(0, 4)})`}</span>
            </h2>
            <p>User score: {details.vote_average.toFixed(1) * 10}%</p>
            <h3>Overview</h3>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <p>{genresToString(details).join(', ')}</p>
          </Box>
        </Box>

        <LinkList>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </LinkList>
        <Outlet />
      </Box>
    </Main>
  );
};
export default MoviesDetails;
