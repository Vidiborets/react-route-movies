import { Box } from 'components/Box/Box';
import { NavItem } from './Home.styled';
import { Outlet } from 'react-router-dom';
export const Home = () => {
  return (
    <Box as="main">
      <Box>
        <NavItem to="trending">Trending today</NavItem>
      </Box>
      <Outlet />
    </Box>
  );
};
