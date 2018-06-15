const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.site.base');

const { resolvePath } = require('./utils');

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    filename: '[name].[chunkhash:16].js',
    path: resolvePath('dist-site')
  },

  plugins: [
    new CleanWebpackPlugin(['dist-site'], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: './site/index.html',
      inject: true,
      minify: { collapseWhitespace: true },
      production: true,
    })
  ]
});
