module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  extends: ['@react-native'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
