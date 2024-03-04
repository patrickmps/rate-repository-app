import {Platform} from 'react-native';

export default {
  COLORS: {
    BACKGROUND: '#ffffff',
    PRIMARY_100: '#fcfdfd',
    PRIMARY_200: '#fbfcfd',
    PRIMARY_300: '#f9fafc',
    PRIMARY_400: '#f8f9fb',
    PRIMARY_500: '#f6f8fa',
    PRIMARY_600: '#e0e2e4',
    PRIMARY_700: '#afb0b2',
    PRIMARY_800: '#87888a',
    PRIMARY_900: '#676869',
    TEXT_PRIMARY: '#24292f',
    TEXT_SECONDARY: '#57606a',
    SECONDARY: '#0969da',
    BUTTON: '#2ea043',
    ERROR: '#d73a4a',
  },
  FONTS: {
    REGULAR: Platform.select({
      android: 'Roboto-Regular',
      ios: 'Montserrat-Regular',
      default: 'sans-serif',
    }),
    BOLD: Platform.select({
      android: 'Roboto-Bold',
      ios: 'Montserrat-Bold',
      default: 'sans-serif',
    }),
    MEDIUM: Platform.select({
      android: 'Roboto-Medium',
      ios: 'Montserrat-Medium',
      default: 'sans-serif',
    }),
  },
};
