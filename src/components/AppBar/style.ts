import styled from 'styled-components/native';

export const Container = styled.View.attrs<{$statusBarHeigth?: number}>(
  props => ({
    $statusBarHeigth: props.$statusBarHeigth || 0,
  }),
)`
  padding-top: ${props => props.$statusBarHeigth}px;
  padding-bottom: 16px;
  padding-left: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Text = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
`;
