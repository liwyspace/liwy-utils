/*
 * webpack 基础配置文件
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // alias: {
        //     'jquery': ''
        // },
        extensions: ['.js','.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['eslint-loader'],
                // 指定include,避免对第三方模块进行babel解析,以影响效率
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'test')]
            }
        ]
    }
    // plugins: [
    // ]
};
