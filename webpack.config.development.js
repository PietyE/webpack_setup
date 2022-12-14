const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    liveReload: false,
    open: true,
    // for SPA application
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // if you want to use only module css switch to true
              modules: undefined,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.PUBLIC_URL': JSON.stringify(
        path.resolve(__dirname, './public'),
      ),
      'process.env.PUBLIC_TEST': JSON.stringify('webpack test env dev'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      linkType: 'text/css',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      inject: 'body',
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
});
