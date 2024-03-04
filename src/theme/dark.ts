import {Platform} from 'react-native';

export default {
  COLORS: {
    BACKGROUND: '#010409',
    PRIMARY_100: '#b4b5b7',
    PRIMARY_200: '#909294',
    PRIMARY_300: '#5d6064',
    PRIMARY_400: '#3d4145',
    PRIMARY_500: '#0d1117',
    PRIMARY_600: '#0c0f15',
    PRIMARY_700: '#090c10',
    PRIMARY_800: '#07090d',
    PRIMARY_900: '#05070a',
    TEXT_PRIMARY: '#e6edf3',
    TEXT_SECONDARY: '#848d97',
    SECONDARY: '#2f81f7',
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
