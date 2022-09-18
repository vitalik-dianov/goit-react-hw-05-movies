import styled from 'styled-components';

export const BackBtn = styled.button`
  background-color: ${p => p.theme.colors.backgroundPrimary};
  border-radius: ${p => p.theme.radii.md};
  width: ${p => p.theme.sizes[4]};
  border: ${p => p.theme.borders.none};
`;
