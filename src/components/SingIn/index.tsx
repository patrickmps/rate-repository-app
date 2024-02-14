import {Formik} from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../TextInput';
import {ButtonTitle, Container, SubmitButton} from './styles';

interface InitialValuesTypes {
  username: string;
  password: string;
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'The username must be at least 3 characters long!')
    .required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

const SignIn = () => {
  const initialValues: InitialValuesTypes = {
    username: '',
    password: '',
  };

  const onSubmit = (values: InitialValuesTypes) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({handleSubmit}) => (
        <Container>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton onPress={() => handleSubmit()}>
            <ButtonTitle>Sing in</ButtonTitle>
          </SubmitButton>
        </Container>
      )}
    </Formik>
  );
};

export default SignIn;
