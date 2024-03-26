import styled from 'styled-components/native';

export const NativeButton = styled.Pressable`
  background-color: transparent;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: sans-serif;
  margin: 0 5px;
`;

export const ButtonTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
`;
