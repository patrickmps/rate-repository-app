import {useApolloClient, useMutation} from '@apollo/client';
import {AUTHENTICATE} from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

type AuthType = {
  username: string;
  password: string;
};

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({username, password}: AuthType) => {
    const {data} = await mutate({
      variables: {credentials: {username, password}},
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
