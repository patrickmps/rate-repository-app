import {Formik} from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../TextInput';
import {Container} from './styles';
import useSignIn from '../../hooks/useSignIn';
import {useNavigation} from '@react-navigation/native';
import Button from '../Button';
import Toast from 'react-native-toast-message';

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

type SignInProps = {
  onSubmit: (values: InitialValuesTypes) => Promise<void>;
  loading?: boolean;
};

export const SignInContainer = ({onSubmit, loading}: SignInProps) => {
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
          <Button
            title="Sign in"
            onPress={() => handleSubmit()}
            loading={loading}
          />
        </Container>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const navigation = useNavigation();

  const onSubmit = async (values: InitialValuesTypes) => {
    const {username, password} = values;

    try {
      await signIn({username, password});
      navigation.navigate('Repositories');
      Toast.show({
        type: 'success',
        text1: 'Login successful',
        text2: `Welcome, ${username}!`,
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Incorrect credentials',
        text2: 'Enter the correct credentials and try again',
      });
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} loading={result.loading} />;
};

export default SignIn;
