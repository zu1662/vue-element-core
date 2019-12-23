module.exports = {
  root: true,
  env: {
    node: true
  },
  // eslint plugin for file
  plugins: ['html', 'vue'],
  // eslint rule extends follow
  extends: [
    'standard',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {},
  parserOptions: {
    parser: 'babel-eslint'
  }
}
