import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import * as movieAPI from 'services/movieAPI';

export const Movies = () => {
  //   const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [found, setFound] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ inputQuery }) => setSearchParams({ query: inputQuery });
  //   console.log(query);
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
        // console.log(data);
        setFound(data);
      };
      fetchOnQuery();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('inputQuery', { required: true })}
          defaultValue=""
        />
        {errors.inputQuery && <span>This field is required</span>}
        <input type="submit" />
      </form>

      <ul>
        {found.map(film => {
        //   console.log(film);
          return (
            <li key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: `movies?query=${searchParams.get('query')}` }}
              >
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
