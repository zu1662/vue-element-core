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
  rules: {
    'no-console':  'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-alert': process.env.NODE_ENV === 'development' ? 'off' : 'error'
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
}
