import { Box } from 'components/Box/Box';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../../data/moviesApi';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  const handleChange = value => {
    setSearchParams(
      value !== ''
        ? {
            filter: value,
          }
        : {}
    );
  };
  useEffect(() => {
    if (!filter) return;
    fetchMoviesByName(filter).then(setMovie);
  }, [filter]);
  console.log(movie);
  return (
    <Box as="main">
      <SearchBox onChange={handleChange} />
      {movie.length > 0 && (
        <ul>
          {movie.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </Box>
  );
};
