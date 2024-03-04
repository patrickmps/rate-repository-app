import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignIn from '../components/SignIn';
import RepositoryList from '../components/RepositoryList';
import {useApolloClient, useQuery} from '@apollo/client';
import {ME} from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import SingleRepository from '../components/SingleRepository';
import RootStackParamList from './@types/stack';
import CreateReview from '../components/CreateReview';
import SignUp from '../components/SignUp';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {data: user} = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  async function signOut() {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  }

  function signIn() {
    navigation.navigate('SignIn');
  }
  function signUp() {
    navigation.navigate('SignUp');
  }
  function createReview() {
    navigation.navigate('CreateReview');
  }

  const headerRightButton = () => {
    return user?.me ? (
      <>
        <Button onPress={createReview} title="Create Review" />
        <Button onPress={signOut} title="Sign Out" />
      </>
    ) : (
      <>
        <Button onPress={signIn} title="Sign In" />
        <Button onPress={signUp} title="Sign Up" />
      </>
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
        name="Repository"
        component={SingleRepository}
        options={{
          title: 'Repository',
          headerStyle: {
            backgroundColor: theme.COLORS.BACKGROUND,
          },
          headerTintColor: theme.COLORS.TEXT_PRIMARY,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: headerRightButton,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sing in',
          headerStyle: {
            backgroundColor: theme.COLORS.BACKGROUND,
          },
          headerTintColor: theme.COLORS.TEXT_PRIMARY,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sing up',
          headerStyle: {
            backgroundColor: theme.COLORS.BACKGROUND,
          },
          headerTintColor: theme.COLORS.TEXT_PRIMARY,
        }}
      />

      <Stack.Screen
        name="CreateReview"
        component={CreateReview}
        options={{
          title: 'Create review',
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
