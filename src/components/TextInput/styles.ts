import styled from 'styled-components/native';
import {NativeInputProps} from './TextInput';

export const NativeTextInput = styled.TextInput<NativeInputProps>`
  border: 1px solid
    ${props =>
      props.error ? props.theme.COLORS.ERROR : props.theme.COLORS.PRIMARY_300};
  padding-left: 10px;
  border-radius: 10px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.ERROR};
  font-weight: 500;
`;
