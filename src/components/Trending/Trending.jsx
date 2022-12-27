import { Box } from 'components/Box/Box';
import { NavItem } from './Trending.styled';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../data/moviesApi';
import { useLocation } from 'react-router-dom';
export const Trending = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(setItems);
  }, []);
  const movies = items.results;

  return (
    <Box>
      {movies && (
        <Box as="ul">
          {movies.map(({ name, title, id }) => (
            <li key={id}>
              <NavItem state={{ from: location }} to={`/movies/${id}`}>
                {title || name}
              </NavItem>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};
