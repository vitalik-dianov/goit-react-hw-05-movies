import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[6]};
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CastItem = styled.li`
  width: ${p => p.theme.sizes[4]};
`;

export const CharacterName = styled.p`
  width: 150px;
  word-wrap: break-word;
`;
