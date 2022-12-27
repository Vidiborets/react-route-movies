import axios from 'axios';

const KEY = '048e8c089b7a464bfd04ecdb925bf7b7';
const URL = `https://api.themoviedb.org/3/`;
export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${URL}trending/all/week?api_key=${KEY}`);
  return res.data;
};
export const fetchMoviesById = async moviesId => {
  const { data } = await axios(
    `${URL}movie/${moviesId}?api_key=${KEY}&language=en-US`
  );
  return data;
};
export const fetchMoviesByName = async value => {
  const { data } = await axios(
    `${URL}search/movie?&query=${value}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
  return data.results;
};
