import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const NativeInput = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
`;

export const Box = styled.View`
  margin: 15px 15px 0px 15px;
  border-radius: 10px;
  border: solid 1px ${({theme}) => theme.COLORS.PRIMARY_700};
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  background: ${({theme}) => theme.COLORS.PRIMARY_500};
`;

export const SearchIcon = styled(Icon).attrs(props => ({
  size: 24,
}))`
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
`;
