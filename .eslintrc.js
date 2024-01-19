module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
    overrides: [
      {
        env: {
          node: true
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'linebreak-style': ['error', 'windows'],
      'space-before-function-paren': 'off',
      'no-var': 'off',
      'func-style': ['error', 'declaration'],
      'promise/always-return': 'off',
      'promise/no-nesting': 'off',
      'comma-dangle': ['error', 'never'],
      camelcase: 'off',
      'no-console': 'off',
      eqeqeq: ['error', 'always'],
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      'no-param-reassign': ['error', { props: false }]
    }
  };
  