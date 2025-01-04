// webpack.config.js
module.exports = {
  entry: './src/index.js', // entry
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  plugins: [],
}
