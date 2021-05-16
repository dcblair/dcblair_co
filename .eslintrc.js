module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    strict: ['error', 'safe'],
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-eval': 'error',
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': [2, 'never'],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.tsx', '.ts', '.jsx', '.js'] }
    ],
    'object-curly-newline': 0,
    'react/jsx-curly-newline': 0,
    'implicit-arrow-linebreak': 0
  }
};
