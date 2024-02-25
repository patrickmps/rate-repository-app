module.exports = {
  root: true,
  plugins: ['react', 'react-native'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', '@react-native'],
  parser: '@babel/eslint-parser',
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-tsx-scope': 'off',
  },
};
