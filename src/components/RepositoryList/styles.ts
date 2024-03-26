import styled from 'styled-components/native';

export const Separator = styled.View`
  flex: 1;
  height: 2px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Box = styled.View`
  background: ${({theme}) => theme.COLORS.PRIMARY_500};
`;
