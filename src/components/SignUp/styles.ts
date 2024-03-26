import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 15px;
  gap: 16px;
`;
