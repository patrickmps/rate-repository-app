import {FlatList} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import RepositoryItem from '../RepositoryItem';
import {GET_REPOSITORY} from '../../graphql/queries';
import {useQuery} from '@apollo/client';
import {ReviewRepositoryTypes} from '../../@types/repository';

import {Separator, Text} from './styles';
import ReviewItem from '../ReviewItem';
import {ReviewItemProps} from '../ReviewItem/@types/reviewItem';

const SingleRepository = () => {
  const {params}: RouteProp<{params: {id: string}}> = useRoute();
  const {data, error, loading} = useQuery(GET_REPOSITORY, {
    variables: {repositoryId: params.id},
    fetchPolicy: 'network-only',
  });

  const reviews: ReviewItemProps[] = data?.repository?.reviews
    ? data?.repository?.reviews?.edges?.map(
        (edge: ReviewRepositoryTypes): ReviewItemProps => {
          return {
            id: edge.node.id,
            createdAt: edge.node.createdAt,
            rating: edge.node.rating,
            textReview: edge.node.text,
            title: edge.node.user.username,
          };
        },
      )
    : [];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const renderReview = ({item}: {item: ReviewItemProps}) => (
    <ReviewItem review={item} />
  );

  return loading ? (
    <Text>caregando...</Text>
  ) : (
    <FlatList
      data={reviews}
      renderItem={renderReview}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <RepositoryItem repository={data?.repository} showButton />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default SingleRepository;
