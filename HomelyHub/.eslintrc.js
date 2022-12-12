module.exports = {
  root: true,
  extends: [
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@tanstack/query'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
