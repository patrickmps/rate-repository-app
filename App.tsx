import React from 'react';
import Routes from './src/routes';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import light from './src/theme/light';
import dark from './src/theme/dark';
import createApolloClient from './src/utils/apolloClient';
import {ApolloProvider} from '@apollo/client';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? dark.COLORS.BACKGROUND
      : light.COLORS.BACKGROUND,
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AuthStorageContext.Provider value={authStorage}>
          <Routes />
        </AuthStorageContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
