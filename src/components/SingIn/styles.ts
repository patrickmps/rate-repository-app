import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 15px;
`;

export const SubmitButton = styled.Pressable`
  background-color: ${({theme}) => theme.COLORS.BUTTON};
  margin: 15px 0px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: sans-serif;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;
