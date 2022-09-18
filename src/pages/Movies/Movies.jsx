import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import * as movieAPI from 'services/movieAPI';
import { Box } from 'services/Box';
import {
  FilmImage,
  FilmItem,
  FilmLink,
  FilmList,
  FilmTitle,
  SearchBtn,
  SearchForm,
  SearchInput,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [found, setFound] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const onSubmit = ({ inputQuery }) => setSearchParams({ query: inputQuery });
  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    try {
      const fetchOnQuery = async () => {
        const data = await movieAPI.getOnQuery(searchParams.get('query'));
        if (!data) {
          return;
        }
        setFound(data);
      };
      fetchOnQuery();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  return (
    <Box minWidth={8} maxWidth={10} pb={4} pl={7} pr={7} mr="auto" ml="auto">
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          {...register('inputQuery', { required: true })}
          defaultValue=""
        />
        {errors.inputQuery && <span>This field is required</span>}
        <SearchBtn type="submit" value="SEARCH" />
      </SearchForm>

      <FilmList>
        {found.map(film => {
          return (
            <FilmItem key={film.id}>
              <FilmLink
                to={`/movies/${film.id}`}
                state={{ from: `${location.pathname}${location.search}` }}
              >
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
  );
};
export default Movies;
