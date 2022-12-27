import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.blue};
`;
