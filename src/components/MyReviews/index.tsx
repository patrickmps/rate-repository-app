import {useQuery} from '@apollo/client';
import {ME} from '../../graphql/queries';
import {FlatList, Text} from 'react-native';
import ReviewItem from '../ReviewItem';
import {Separator} from './styles';
import {ReviewItemProps} from '../ReviewItem/@types/reviewItem';
import {ReviewRepositoryTypes} from '../../@types/repository';

const MyReviews = () => {
  const {data, error, loading} = useQuery(ME, {
    variables: {includeReviews: true},
    fetchPolicy: 'cache-and-network',
  });

  const reviews: ReviewItemProps[] = data?.me?.reviews
    ? data?.me?.reviews?.edges?.map(
        (edge: ReviewRepositoryTypes): ReviewItemProps => {
          return {
            id: edge.node.id,
            createdAt: edge.node.createdAt,
            rating: edge.node.rating,
            textReview: edge.node.text,
            title: edge.node.repository.fullName,
            url: edge.node.repository.url,
          };
        },
      )
    : [];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const renderReview = ({item}: {item: ReviewItemProps}) => (
    <ReviewItem review={item} showButtons />
  );

  return loading ? (
    <Text>caregando...</Text>
  ) : (
    <FlatList
      data={reviews}
      renderItem={renderReview}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default MyReviews;
