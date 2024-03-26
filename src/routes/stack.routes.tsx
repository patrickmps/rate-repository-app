import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import SignIn from '../components/SignIn';
import RepositoryList from '../components/RepositoryList';
import {ApolloError, useApolloClient, useQuery} from '@apollo/client';
import {ME} from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import SingleRepository from '../components/SingleRepository';
import RootStackParamList from './@types/stack';
import CreateReview from '../components/CreateReview';
import SignUp from '../components/SignUp';
import MyReviews from '../components/MyReviews';
import MenuLink from '../components/MenuLink';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {data: user} = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  async function signOut() {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      Toast.show({
        type: 'success',
        text1: 'Sign out successfully!',
      });
    } catch (e) {
      if (e instanceof ApolloError) {
        Toast.show({
          type: 'error',
          text1: 'Error!',
          text2: `${e.message}`,
        });
      }
      console.log(e);
    }
  }

  function signOutAlert() {
    return Alert.alert('Sign out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Sign out', onPress: signOut},
    ]);
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
  function myReviews() {
    navigation.navigate('MyReviews');
  }

  const headerRightButton = () => {
    return user?.me ? (
      <>
        <MenuLink onPress={myReviews} title="My Reviews" />
        <MenuLink onPress={createReview} title="Create Review" />
        <MenuLink onPress={signOutAlert} title="Sign Out" />
      </>
    ) : (
      <>
        <MenuLink onPress={signIn} title="Sign In" />
        <MenuLink onPress={signUp} title="Sign Up" />
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
      <Stack.Screen
        name="MyReviews"
        component={MyReviews}
        options={{
          title: 'My Reviews',
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
