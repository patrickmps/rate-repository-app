import {TextInputProps} from 'react-native';
import {NativeTextInput} from './styles';

export type NativeInputProps = TextInputProps & {
  error: string | boolean | undefined;
};

const TextInput = ({error, ...props}: NativeInputProps) => {
  console.log(error);

  return <NativeTextInput {...props} error={error} />;
};

export default TextInput;
