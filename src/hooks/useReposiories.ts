import {QueryResult, useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../graphql/queries';
import {RepositoriesType} from '../@types/repository';

type RepositoriesResult = {
  repositories: RepositoriesType;
  fetchMore: () => void;
  loading: boolean;
  result: QueryResult;
};

const useRepositories = (variables?: object) => {
  const {data, loading, fetchMore, ...result} = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
