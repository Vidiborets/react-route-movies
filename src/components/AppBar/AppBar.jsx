import { Box } from 'components/Box/Box';
import { NavItem } from './AppBar.styled';
const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export const AppBar = () => {
  return (
    <Box as="header">
      <Box as="nav">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
