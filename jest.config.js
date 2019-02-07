module.exports = {
  testRegex: 'spec.js$',

  moduleFileExtensions: [
    'js',
    'vue'
  ],

  transformIgnorePatterns: [
    'node_modules'
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
