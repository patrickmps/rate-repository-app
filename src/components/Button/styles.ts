import styled from 'styled-components/native';

type Props = {
  backgroundColor?: string;
};

export const NativeButton = styled.Pressable<Props>`
  background-color: ${({theme, backgroundColor}) =>
    backgroundColor ?? theme.COLORS.BUTTON};
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
