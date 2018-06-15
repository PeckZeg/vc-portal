const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolvePath } = require('./utils');

module.exports = {
  entry: './site/index.js',

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.vue', '.md'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': resolvePath('src')
    },
  },

  optimization: {
    splitChunks: {
      name: "vendors",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(['dist-site'], {
    //   root: process.cwd()
    // }),
    // new HtmlWebpackPlugin({
    //   template: './site/index.html',
    //   inject: true,
    //   minify: { collapseWhitespace: true },
    //   production: true,
    // })
  ]
};
