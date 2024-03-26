import {ButtonProps} from 'react-native';
import {ButtonTitle, NativeButton} from './styles';

const MenuLink = (props: ButtonProps) => {
  return (
    <NativeButton onPress={props.onPress}>
      <ButtonTitle>{props.title}</ButtonTitle>
    </NativeButton>
  );
};

export default MenuLink;
