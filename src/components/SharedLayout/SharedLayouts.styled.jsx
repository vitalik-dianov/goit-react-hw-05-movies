import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: ${p => p.theme.colors.primary};
  height: ${p => p.theme.sizes[3]};
`;

export const NavigateLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.l};
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]};
  border-radius: ${p => p.theme.radii.md};
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
  &.active {
    color: ${p => p.theme.colors.red};
  }
`;
