import {PressableProps} from 'react-native';
import {ButtonTitle, NativeButton} from './styles';
import Spinner from '../Spinner';
import {useTheme} from 'styled-components/native';

type Props = PressableProps & {
  title: string;
  loading?: boolean;
  backgroundColor?: string;
  flex?: number;
};

const Button = (props: Props) => {
  const theme = useTheme();
  return (
    <NativeButton
      {...props}
      style={{flex: props.flex}}
      disabled={props.loading}>
      {props.loading ? (
        <Spinner size="small" color={theme.COLORS.TEXT_PRIMARY} />
      ) : (
        <ButtonTitle>{props.title}</ButtonTitle>
      )}
    </NativeButton>
  );
};

export default Button;
