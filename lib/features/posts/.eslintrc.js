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
  settings: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        project: 'lib/features/posts/tsconfig.json',
      },
    },
  },
};
