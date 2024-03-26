import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';
import {ReviewItemProps} from '../ReviewItem/@types/reviewItem';

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

export const ReviewList = styled(
  FlatList as new (
    props: FlatListProps<ReviewItemProps>,
  ) => FlatList<ReviewItemProps>,
)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;
