// import * as movieAPI from '../services/movieAPI'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';
import { Cast } from './Cast/Cast';
import {Reviews} from './Reviews/Reviews'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
