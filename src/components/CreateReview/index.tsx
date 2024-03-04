import {Formik} from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../TextInput';
import {ButtonTitle, Container, SubmitButton} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {CREATE_REVIEW} from '../../graphql/mutations';

interface InitialValuesTypes {
  ownerName: string;
  repositoryName: string;
  rating: string;
  review?: string;
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(3, 'The ownerName must be at least 3 characters long!')
    .required('Repository owner name is required.'),
  repositoryName: yup.string().required('Rating is required.'),
  rating: yup.number().lessThan(101).moreThan(-1).required(),
  review: yup.string(),
});

const initialValues: InitialValuesTypes = {
  ownerName: '',
  repositoryName: '',
  rating: '0',
};

type CreateReviewProps = {
  onSubmit: (values: InitialValuesTypes) => Promise<void>;
};

export const CreateReviewContainer = ({onSubmit}: CreateReviewProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({handleSubmit}) => (
        <Container>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner's username"
            textContentType="username"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput name="Review" placeholder="Review" multiline />
          <SubmitButton onPress={() => handleSubmit()}>
            <ButtonTitle>Create a Review</ButtonTitle>
          </SubmitButton>
        </Container>
      )}
    </Formik>
  );
};

const CreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigation = useNavigation();

  const onSubmit = async (values: InitialValuesTypes) => {
    const {ownerName, repositoryName, rating, review} = values;

    try {
      await mutate({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: parseInt(rating),
            text: review ?? '',
          },
        },
      });
      navigation.navigate('Repositories');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
