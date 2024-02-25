import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignIn from '../components/SingIn';
import RepositoryList from '../components/RepositoryList';
import {useApolloClient, useQuery} from '@apollo/client';
import {ME} from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {data: user} = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const headerRightButton = () => {
    return user?.me ? (
      <Button
        onPress={async () => {
          await authStorage.removeAccessToken();
          await apolloClient.resetStore();
        }}
        title="Sing Out"
      />
    ) : (
      <Button onPress={() => navigation.navigate('SingIn')} title="Sing In" />
    );
  };

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
          headerRight: headerRightButton,
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
