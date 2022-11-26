module.exports = {
  extends: ['mantine'],
  rules: {
    'import/extensions': 'off',
    'import/no-relative-packages': 'off',
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
