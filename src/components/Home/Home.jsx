import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import * as movieAPI from 'services/movieAPI';
export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    try {
      const fetchTrends = async () => {
        const data = await movieAPI.getTrending();
        if (!data) {
          return;
        }

        setTrends(data)
      };
      fetchTrends();
      // console.log(trends);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Trending Films</h1>
      
      <ul>
        {trends.map(film => {
            // console.log(film);
            return (
                <li key={film.id}>
                    <Link to={`/movies/${film.id}`}>{film.title}</Link>
                    
                </li>
            )
        })}
      </ul>
    </div>
  );
};
