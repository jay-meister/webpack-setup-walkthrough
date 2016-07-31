module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [{
      test: /.js/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
}
