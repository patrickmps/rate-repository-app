import {formatDistanceToNow} from 'date-fns';
import {
  Button,
  ButtonDelete,
  ButtonTitle,
  Circle,
  Column,
  Container,
  DateText,
  RatingText,
  Row,
  Text,
  TitleText,
} from './styles';
import {ReviewItemProps} from './@types/reviewItem';
import {Alert} from 'react-native';
import {Linking} from 'react-native';
import {DELETE_REVIEW} from '../../graphql/mutations';
import {useMutation} from '@apollo/client';

const ReviewItem = ({
  review,
  showButtons = false,
}: {
  review: ReviewItemProps;
  showButtons?: boolean;
}) => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {refetchQueries: 'all'});

  function deleReview() {
    try {
      mutate({
        variables: {deleteReviewId: review.id},
      });
    } catch (e) {
      console.log(e);
    }
  }

  function deleteAlert() {
    return Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Delete', onPress: deleReview},
      ],
    );
  }

  return (
    <Container>
      <Row>
        <Column>
          <Circle>
            <RatingText>{review.rating}</RatingText>
          </Circle>
        </Column>
        <Column>
          <TitleText>{review.title}</TitleText>
          <DateText>{formatDistanceToNow(review.createdAt)}</DateText>
          <Text>{review.textReview}</Text>
        </Column>
      </Row>
      {showButtons && (
        <Row justifyContent="center" gap={10}>
          <Button>
            <ButtonTitle
              onPress={async () => {
                await Linking.openURL(review.url!);
              }}>
              View repository
            </ButtonTitle>
          </Button>
          <ButtonDelete onPress={deleteAlert}>
            <ButtonTitle>Delete review</ButtonTitle>
          </ButtonDelete>
        </Row>
      )}
    </Container>
  );
};

export default ReviewItem;
