module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    // indent: ['error', 'tabs'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'no-use-before-define': 0,
    'no-return-assign': 0,
    'arrow-body-style': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'global-require': 0,
    'react/no-unescaped-entities': 0,
    camelcase: 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    semi: 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': 0,
  },
};

