import {TextInputProps} from 'react-native';
import {Box, NativeInput, SearchIcon} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchInput = (props: TextInputProps) => {
  return (
    <Box>
      <SearchIcon name="search1" />
      <NativeInput {...props} />
    </Box>
  );
};

export default SearchInput;
