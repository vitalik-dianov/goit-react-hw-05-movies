import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  padding-top: ${p => p.theme.space[4]};
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
`;
export const FilmList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]};
  justify-content: space-between;
`;
export const FilmItem = styled.li`
  gap: ${p => p.theme.space[3]};
`;
export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};

  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;
export const FilmImage = styled.img`
  width: ${p => p.theme.sizes[5]};
  max-height: ${p => p.theme.sizes[8]};
  object-fit: cover;
`;
export const FilmTitle = styled.p`
  word-wrap: break-word;
  width: ${p => p.theme.sizes[5]};
`;
