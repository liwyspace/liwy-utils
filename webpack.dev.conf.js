/*
 * webpack 开发版配置文件
 */

const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf.js');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(webpackBaseConf, {
    devtool: 'inline-source-map',
    plugins: [
        new ManifestPlugin()
    ]
});
