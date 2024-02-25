import {FlatList, Text} from 'react-native';
import RepositoryItem from '../RepositoryItem';
import {Separator} from './styles';
import {useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../../graphql/queries';
import {RepositoryTypes} from '../../@types/repository';

const ItemSeparator = () => <Separator />;

const RepositoryList = () => {
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'network-only',
  });

  const repositoryNodes = data
    ? data.repositories.edges.map(
        (edge: {cursor: string; node: RepositoryTypes}) => edge.node,
      )
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

export default RepositoryList;
