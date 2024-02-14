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
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('SingIn')}
              title="Sing In"
            />
          ),
        }}
      />
      <Stack.Screen
        name="SingIn"
        component={SignIn}
        options={{
          title: 'Sing in',
          headerStyle: {
            backgroundColor: theme.COLORS.BACKGROUND,
          },
          headerTintColor: theme.COLORS.TEXT_PRIMARY,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
