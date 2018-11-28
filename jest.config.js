module.exports = {
  "testRegex": "spec.js$",

  "moduleFileExtensions": [
    "js",
    "vue"
  ],

  "transform": {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(css)$": "jest-css-modules"
  }
}
