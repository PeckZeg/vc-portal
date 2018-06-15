const webpack = require('webpack');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolvePath } = require('./utils');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
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
      'vue$': 'vue/dist/vue.esm.js'
    },
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};
