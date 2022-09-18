import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Main = styled.main`
  padding-top: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.text};
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[6]};
  margin-top: ${p => p.theme.space[5]};
`;

export const AdditionalLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.l};
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  border-radius: ${p => p.theme.radii.md};
  &:hover {
  }
  &.active {
    color: ${p => p.theme.colors.red};
  }
`;
