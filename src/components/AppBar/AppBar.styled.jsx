import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: ${p => p.theme.colors.text};
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  &.active {
    color: ${p => p.theme.colors.blue};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
