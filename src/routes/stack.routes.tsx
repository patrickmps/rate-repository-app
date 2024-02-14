import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RepositoryList from '../components/RepositoryList';
import {useTheme} from 'styled-components';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignIn from '../components/SingIn';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Repositories"
        component={RepositoryList}
        options={{
          title: 'Repositories',
          headerStyle: {
            backgroundColor: theme.COLORS.BACKGROUND,
          },
          headerTintColor: theme.COLORS.TEXT_PRIMARY,
          headerRight: props => (
            <Button
              onPress={() => navigation.navigate('SingIn')}
              title="Sing In"
            />
          ),
        }}
      />
      <Stack.Screen name="SingIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
