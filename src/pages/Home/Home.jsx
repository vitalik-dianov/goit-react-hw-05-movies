import { useState } from 'react';
import { useEffect } from 'react';
import * as movieAPI from 'services/movieAPI';
import { Box } from 'services/Box';
import {
  FilmImage,
  FilmItem,
  FilmLink,
  FilmList,
  FilmTitle,
  Main,
  Title,
} from './Home.styled';

export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    try {
      const fetchTrends = async () => {
        const data = await movieAPI.getTrending();
        if (!data) {
          return;
        }

        setTrends(data);
      };
      fetchTrends();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Main>
      <Box minWidth={8} maxWidth={10} pb={4} pl={7} pr={7} mr="auto" ml="auto">
        <Title>Trending Films</Title>

        <FilmList>
          {trends.map(film => {
            return (
              <FilmItem key={film.id}>
                <FilmLink to={`/movies/${film.id}`}>
                  <FilmImage
                    src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                    alt=""
                  />
                  <FilmTitle>{film.title}</FilmTitle>
                </FilmLink>
              </FilmItem>
            );
          })}
        </FilmList>
      </Box>
    </Main>
  );
};
