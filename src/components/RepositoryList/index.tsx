import {FlatList, Pressable, Text, TextInput} from 'react-native';
import RepositoryItem from '../RepositoryItem';
import {SearchInput, Separator} from './styles';
import {ApolloError, useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../../graphql/queries';
import {RepositoriesType} from '../../@types/repository';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';

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
  const navigation = useNavigation();
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
      ItemSeparatorComponent={Separator}
      renderItem={repository => (
        <Pressable
          onPress={() =>
            navigation.navigate('Repository', {id: repository.item.id})
          }>
          <RepositoryItem repository={repository.item} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [search, setSearch] = useState('');
  const filter = () => {
    switch (selectedFilter) {
      case 'latest-repositories':
        return {
          orderBy: 'CREATED_AT',
          orderDirection: 'DESC',
        };
      case 'highest-rated-repositories':
        return {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'DESC',
        };
      case 'lowest-rated-repositories':
        return {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'ASC',
        };

      default:
        break;
    }
  };
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {...filter(), searchKeyword: search},
  });

  return (
    <>
      <SearchInput onChangeText={text => setSearch(text)} />
      <Picker
        style={{marginHorizontal: 10}}
        selectedValue={selectedFilter}
        onValueChange={(itemValue, itemIndex) => setSelectedFilter(itemValue)}>
        <Picker.Item label="Select an item..." value="" />
        <Picker.Item label="Latest repositories" value="latest-repositories" />
        <Picker.Item
          label="Highest rated repositories"
          value="highest-rated-repositories"
        />
        <Picker.Item
          label="Lowest rated repositories"
          value="lowest-rated-repositories"
        />
      </Picker>
      <RepositoryListContainer
        repositories={data?.repositories}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default RepositoryList;
