import {Container, Text} from './style';
import {Pressable, StatusBar} from 'react-native';

const AppBar = () => {
  return (
    <Pressable>
      <Container $statusBarHeigth={StatusBar.currentHeight}>
        <Text>Repositories</Text>
      </Container>
    </Pressable>
  );
};

export default AppBar;
