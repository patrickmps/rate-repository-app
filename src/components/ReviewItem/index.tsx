import {formatDistanceToNow} from 'date-fns';
import {
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
import Button from '../Button';
import {useTheme} from 'styled-components/native';

const ReviewItem = ({
  review,
  showButtons = false,
}: {
  review: ReviewItemProps;
  showButtons?: boolean;
}) => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {refetchQueries: 'all'});
  const theme = useTheme();

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
          <Button
            title="View repository"
            onPress={async () => {
              await Linking.openURL(review.url!);
            }}
            flex={1}
            backgroundColor={theme.COLORS.SECONDARY}
          />
          <Button
            title="Delete review"
            onPress={deleteAlert}
            flex={1}
            backgroundColor={theme.COLORS.ERROR}
          />
        </Row>
      )}
    </Container>
  );
};

export default ReviewItem;
