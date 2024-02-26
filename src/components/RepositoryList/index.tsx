import {FlatList, Text} from 'react-native';
import RepositoryItem from '../RepositoryItem';
import {Separator} from './styles';
import {ApolloError, useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../../graphql/queries';
import {RepositoriesType} from '../../@types/repository';

const ItemSeparator = () => <Separator />;

type RepositoriesProps = {
  repositories: RepositoriesType;
  error?: undefined | ApolloError;
  loading?: boolean;
};

export const RepositoryListContainer = ({
  repositories,
  error,
  loading,
}: RepositoriesProps) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return loading ? (
    <Text>carregando...</Text>
  ) : (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={repository => <RepositoryItem repository={repository.item} />}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'network-only',
  });

  return (
    <RepositoryListContainer
      repositories={data.repositories}
      error={error}
      loading={loading}
    />
  );
};

export default RepositoryList;
