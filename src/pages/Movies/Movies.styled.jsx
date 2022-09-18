import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const SearchForm = styled.form`
  margin-top: ${p => p.theme.space[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[6]};
`;
export const SearchInput = styled.input`
  height: ${p => p.theme.sizes[2]};
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};

  box-shadow: ${p => p.theme.shadows.all};

  padding: 0 ${p => p.theme.space[3]};

  &:focus {
  }
`;

export const SearchBtn = styled.input`
  height: ${p => p.theme.sizes[2]};
  font-size: ${p => p.theme.fontSizes.m};
  box-shadow: ${p => p.theme.shadows.all};
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.none};
`;
