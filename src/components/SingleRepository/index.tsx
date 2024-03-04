import {FlatList} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import RepositoryItem from '../RepositoryItem';
import {GET_REPOSITORY} from '../../graphql/queries';
import {useQuery} from '@apollo/client';
import {ReviewRepositoryTypes} from '../../@types/repository';
import {formatDistanceToNow} from 'date-fns';
import {
  Circle,
  Column,
  Container,
  DateText,
  RatingText,
  Row,
  Separator,
  Text,
  UserNameText,
} from './styles';

const ReviewItem = ({review}: {review: ReviewRepositoryTypes}) => {
  return (
    <Container>
      <Row>
        <Column>
          <Circle>
            <RatingText>{review.node.rating}</RatingText>
          </Circle>
        </Column>
        <Column>
          <UserNameText>{review.node.user.username}</UserNameText>
          <DateText>{formatDistanceToNow(review.node.createdAt)}</DateText>
          <Text>{review.node.text}</Text>
        </Column>
      </Row>
    </Container>
  );
};

const SingleRepository = () => {
  const {params}: RouteProp<{params: {id: string}}> = useRoute();
  const {data, error, loading} = useQuery(GET_REPOSITORY, {
    variables: {repositoryId: params.id},
    fetchPolicy: 'network-only',
  });

  const reviews: ReviewRepositoryTypes[] = data?.repository?.reviews
    ? data?.repository?.reviews?.edges?.map(
        (edge: {node: ReviewRepositoryTypes}) => edge,
      )
    : [];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const renderReview = ({item}: {item: ReviewRepositoryTypes}) => (
    <ReviewItem review={item} />
  );

  return loading ? (
    <Text>caregando...</Text>
  ) : (
    <FlatList
      data={reviews}
      renderItem={renderReview}
      keyExtractor={item => item.node.id}
      ListHeaderComponent={() => (
        <RepositoryItem repository={data?.repository} showButton />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default SingleRepository;
