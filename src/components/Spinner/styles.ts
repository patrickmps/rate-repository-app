import styled from 'styled-components/native';

export const ActivityIndicator = styled.ActivityIndicator.attrs(
  ({theme, size, color}) => ({
    size: size ?? 'large',
    color: color ?? theme.COLORS.SECONDARY,
  }),
)`
  height: 90%;
  align-items: center;
  justify-content: center;
`;
