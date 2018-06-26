const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.site.base');

const { resolvePath } = require('./utils');

module.exports = merge(baseConfig, {
    mode: 'production',

    entry: './src/index.jsx',

    output: {
        filename: 'main.js',
        path: resolvePath('dist')
    },

    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },

    // optimization: {
    //     minimize: false
    // },

    plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: process.cwd()
      })
    ]
});
