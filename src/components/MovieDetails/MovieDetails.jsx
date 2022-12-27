import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { fetchMoviesById } from '../../data/moviesApi';
export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetchMoviesById(moviesId).then(setMovie);
  }, [moviesId]);
  console.log(movie);
  return (
    <Box>
      <Link to={location.state?.from ?? '/movies'}>Back</Link>
      {movie && (
        <Box display="flex">
          <Box>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Box>

          <Box>
            <h2>{movie.title}</h2>
            <p>User score:{`${movie.vote_average}`}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </Box>
        </Box>
      )}
    </Box>
  );
};
