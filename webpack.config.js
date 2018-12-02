const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
          publicPath: 'public'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true
    })
  ],

  // devServer: {
  //   compress: true,
  //   contentBase: path.resolve(__dirname, 'public/'),
  //   publicPath: path.resolve(__dirname, 'public/'),
  //   host: '0.0.0.0',
  //   public: '0.0.0.0:8080',
  //   port: '8080',
  //   historyApiFallback: true
  // }

};
