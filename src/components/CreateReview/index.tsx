import {Formik} from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../TextInput';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';
import {ApolloError, useMutation} from '@apollo/client';
import {CREATE_REVIEW} from '../../graphql/mutations';
import Button from '../Button';
import Toast from 'react-native-toast-message';

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
  loading: boolean;
};

export const CreateReviewContainer = ({
  onSubmit,
  loading,
}: CreateReviewProps) => {
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
          <FormikTextInput name="review" placeholder="Review" multiline />
          <Button
            title="Create a review"
            onPress={() => handleSubmit()}
            loading={loading}
          />
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
      Toast.show({
        type: 'success',
        text1: 'Review created successfully!',
      });
    } catch (e) {
      if (e instanceof ApolloError) {
        Toast.show({
          type: 'error',
          text1: 'Error!',
          text2: `${e.message}`,
        });
      }
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} loading={result.loading} />;
};

export default CreateReview;
