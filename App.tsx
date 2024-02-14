import React from 'react';
import Routes from './src/routes';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import light from './src/theme/light';
import dark from './src/theme/dark';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? dark.COLORS.BACKGROUND
      : light.COLORS.BACKGROUND,
  };

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
