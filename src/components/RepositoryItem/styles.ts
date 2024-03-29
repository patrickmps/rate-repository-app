import styled from 'styled-components/native';

type RepositoryStyleProps = {
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
};

export const Container = styled.View`
  flex: 1;
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
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap ?? 0}px;
  flex-shrink: 1;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 8px;
`;

export const FullName = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;
export const Description = styled.Text`
  flex: 1;
  font-size: 14px;
  flex-wrap: wrap;
  color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
`;
export const Language = styled.Text`
  font-size: 14px;
  color: #fff;
  background-color: ${({theme}) => theme.COLORS.SECONDARY};
  align-self: flex-start;
  padding: 4px 6px;
  border-radius: 4px;
`;
export const Number = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
  font-weight: 600;
`;
export const Label = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
`;

export const Button = styled.Pressable`
  background-color: ${({theme}) => theme.COLORS.SECONDARY};
  margin: 15px 10px;
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
