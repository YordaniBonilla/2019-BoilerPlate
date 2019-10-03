const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: false, 
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development', 
  entry: './client/src/index.js',
  output: { 
    path: path.resolve(`${__dirname}/client/dist`),
    filename: 'bundle.js',
    // publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/'
  },
  //This option is used to configure how different types of module are treated in a project, this is a key configuration in our project as it's used to handle, load any file type in our project, from JS to images to our styles.
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"] 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "/assets/fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: '/assets/images/[name].[ext]' }
          }
        ]
      }
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './client/src/index.html',
    filename: "index.html"
  })
]
};