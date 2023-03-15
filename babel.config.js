module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin', 'react-native-paper/babel', [
    'module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
    },
  ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
