import styled from 'styled-components/native';

type RepositoryStyleProps = {
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
};

export const Separator = styled.View`
  flex: 1;
  height: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Container = styled.View`
  flex-shrink: 1;
  background: ${({theme}) => theme.COLORS.PRIMARY_500};
`;

export const Row = styled.View<RepositoryStyleProps>`
  flex-direction: row;
  padding: 10px;
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap ?? 0}px;
`;
export const Column = styled.View<RepositoryStyleProps>`
  flex-direction: column;
  margin-right: 20px;
  flex-shrink: 1;
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap ?? 0}px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;

export const Circle = styled.View`
  width: 50px;
  height: 50px;
  border: 2px solid ${({theme}) => theme.COLORS.SECONDARY};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const RatingText = styled(Text)`
  color: ${({theme}) => theme.COLORS.SECONDARY};
  font-family: ${({theme}) => theme.FONTS.BOLD};
`;

export const UserNameText = styled(Text)`
  font-family: ${({theme}) => theme.FONTS.BOLD};
`;

export const DateText = styled(Text)`
  color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
  margin-bottom: 6px;
`;
