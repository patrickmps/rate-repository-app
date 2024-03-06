import styled from 'styled-components/native';

export const Separator = styled.View`
  flex: 1;
  height: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;
