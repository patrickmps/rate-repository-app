import {FlatList, Pressable, Text} from 'react-native';
import RepositoryItem from '../RepositoryItem';
import {Box, Separator} from './styles';
import {ApolloError} from '@apollo/client';
import {RepositoriesType} from '../../@types/repository';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import useRepositories from '../../hooks/useReposiories';
import SearchInput from '../SearchInput';
import Spinner from '../Spinner';

type RepositoriesProps = {
  repositories: RepositoriesType;
  error?: undefined | ApolloError;
  loading?: boolean;
  onEndReach?: (info: {distanceFromEnd: number}) => void;
};

export const RepositoryListContainer = ({
  repositories,
  error,
  loading,
  onEndReach,
}: RepositoriesProps) => {
  const navigation = useNavigation();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return loading ? (
    <Spinner />
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
      onEndReached={onEndReach}
      // onEndReachedThreshold={0.5}
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

  const {repositories, error, loading, fetchMore} = useRepositories({
    ...filter(),
    searchKeyword: search,
    first: 6,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <Box>
      <SearchInput
        onChangeText={text => setSearch(text)}
        placeholder="Search a repository"
      />
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
        repositories={repositories}
        error={error}
        loading={loading}
        onEndReach={onEndReach}
      />
    </Box>
  );
};

export default RepositoryList;
