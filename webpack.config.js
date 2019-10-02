const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  watch: false, 
  mode: 'development', 
  entry: './client/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/client', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './client/src/index.html'
  })
]
};