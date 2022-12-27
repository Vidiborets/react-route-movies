import { Box } from 'components/Box/Box';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};
