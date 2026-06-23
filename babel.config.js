module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@modules': './src/modules',
          '@shared': './src/modules/shared',
          '@services': './src/modules/services',
          '@utils': './src/modules/utils',
          '@hooks': './src/modules/hooks',
          '@config': './src/modules/config',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@infrastructure': './src/modules/infrastructure',
        },
      },
    ],
  ],
};
