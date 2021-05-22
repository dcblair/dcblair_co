module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': [2, 'never'],
    eqeqeq: 'error',
    'implicit-arrow-linebreak': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    indent: ['error', 2],
    'no-console': 'warn',
    'no-eval': 'error',
    'no-undef': 0,
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single'],
    'object-curly-newline': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.tsx', '.ts', '.jsx', '.js'] }
    ],
    'react/prop-types': 'off',
    semi: ['warn', 'always'],
    strict: ['error', 'safe']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
