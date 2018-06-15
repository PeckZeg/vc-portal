const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.site.base');

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    open: true,
    inline: true,
    compress: false,
    port: 8080
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './site/index.html',
      inject: true,
      minify: { collapseWhitespace: true },
      production: true,
    })
  ]
});
