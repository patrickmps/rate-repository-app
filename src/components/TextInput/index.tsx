import {useField} from 'formik';
import TextInput from './TextInput';
import {TextInputProps} from 'react-native';
import {TextError} from './styles';

type FormikTextInputProps = TextInputProps & {
  name: string;
};

const FormikTextInput = ({name, ...props}: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <TextError>{meta.error}</TextError>}
    </>
  );
};

export default FormikTextInput;
