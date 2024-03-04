import styled from 'styled-components/native';

export const Separator = styled.View`
  flex: 1;
  height: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const SearchInput = styled.TextInput`
  background: ${({theme}) => theme.COLORS.PRIMARY_500};
  margin: 15px 15px 0px 15px;
  padding-left: 10px;
  border-radius: 10px;
  border: solid 1px ${({theme}) => theme.COLORS.PRIMARY_700};
`;
