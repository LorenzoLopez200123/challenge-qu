module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', 'prettier/vue', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        eqeqeq: 1,
        'no-unused-vars': 'warn',
        'no-useless-escape': 'warn',
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': 1,
        'prefer-const': 'warn',
        'multiline-ternary': 0,
        semi: 0,
        quotes: 0,
        'react/no-unescaped-entities': 0,
        'object-curly-spacing': 1,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        camelcase: 'warn',
        'eol-last': 0,
        'no-extra-semi': 'warn',
        curly: 'warn',
        indent: 0,
        'handle-callback-err': ['error'],
      },
    ],
  },
};
