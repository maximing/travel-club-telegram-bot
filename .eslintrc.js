module.exports = {
  env: {
    node: true,
    es6: true,
    commonjs: true
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:chronobank/recommended', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none' }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['error', 'debug'] }],
    'no-unused-vars': 1,
    curly: ['error', 'multi'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'linebreak-style': ['error', 'unix'],
    'func-names': ['error', 'never'],
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    'nonblock-statement-body-position': 0,
    'no-param-reassign': 0,
    'import/order': 0,
    'no-return-await': 0,
    'no-restricted-properties': 0,
    'consistent-return': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    allowImportExportEverywhere: true
  },
  globals: {
    axios: true,
    before: true,
    describe: true,
    after: true
  }
}
