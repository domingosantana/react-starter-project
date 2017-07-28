const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true || {/* CSSNano Options */}
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]})
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles/style.css', {
        allChunks: true
      }),
      new CopyWebpackPlugin([
        { from: './src/index.html' }
      ])
    ]
  };
