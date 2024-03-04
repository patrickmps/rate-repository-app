import {Formik} from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../TextInput';
import {ButtonTitle, Container, SubmitButton} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../../graphql/mutations';

interface InitialValuesTypes {
  username: string;
  password: string;
  passwordConfirm: string;
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'The username must be at least 5 characters long!')
    .max(30, 'The username must be a maximum of 30 characters!')
    .required('Username is required.'),
  password: yup
    .string()
    .min(5, 'The password must be at least 5 characters long!')
    .max(50, 'The password must be a maximum of 50 characters!')
    .required('Password is required.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Password confirm not matchs!')
    .required('Password confirm is required'),
});

const initialValues: InitialValuesTypes = {
  username: '',
  password: '',
  passwordConfirm: '',
};

type SignUpProps = {
  onSubmit: (values: InitialValuesTypes) => Promise<void>;
};

export const SignUpContainer = ({onSubmit}: SignUpProps) => {
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
          <FormikTextInput
            name="passwordConfirm"
            placeholder="Password Confirm"
            secureTextEntry
          />
          <SubmitButton onPress={() => handleSubmit()}>
            <ButtonTitle>Sign up</ButtonTitle>
          </SubmitButton>
        </Container>
      )}
    </Formik>
  );
};

const SignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const navigation = useNavigation();

  const onSubmit = async (values: InitialValuesTypes) => {
    const {username, password} = values;

    try {
      mutate({variables: {user: {username, password}}});
      console.log(result);

      navigation.navigate('SignIn');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
