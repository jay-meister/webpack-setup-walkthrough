const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './public/'
  },
  module: {
    loaders: [{
      test: '/.js/',
      loaders: ['babel'],
      exclude: '/node_modules/'
    }]
  }
}
