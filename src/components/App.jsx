import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Trending } from './Trending/Trending';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home/trending" />} />
          <Route path="home" element={<Home />}>
            <Route index element={<Navigate to="trending" />} />
            <Route path="trending" element={<Trending />}></Route>
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
