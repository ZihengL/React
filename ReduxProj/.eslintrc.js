module.exports = {
  root: true,
  extends: '@react-native',
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false,
  },
  env: {
    browser: true,
  },
  rules: {
    'linebreak-style': 0, // <----------
  },
};
