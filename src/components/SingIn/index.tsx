import {Formik} from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../TextInput';
import {ButtonTitle, Container, SubmitButton} from './styles';
import useSignIn from '../../hooks/useSignIn';
import {useNavigation} from '@react-navigation/native';

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

const initialValues: InitialValuesTypes = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigation = useNavigation();

  const onSubmit = async (values: InitialValuesTypes) => {
    const {username, password} = values;

    try {
      const {data} = await signIn({username, password});
      navigation.navigate('Repositories');
    } catch (e) {
      console.log(e);
    }
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
