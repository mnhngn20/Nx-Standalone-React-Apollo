module.exports = {
  extends: ['plugin:@nx/react', '../../../.eslintrc.base.json'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
      './tsconfig.json',
      '../../../tsconfig.base.json',
    ],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};
