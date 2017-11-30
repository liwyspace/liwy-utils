// Karma configuration
// Generated on Thu Nov 30 2017 09:51:23 GMT+0800 (中国标准时间)
var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'test/unit/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/unit/index.js':['webpack','sourcemap']
    },

    //http://www.jianshu.com/p/a515fbbdd1b2
    //http://www.tangshuang.net/2969.html

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage-istanbul'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageIstanbulReporter: {
        reports: [ 'html','text-summary' ],
        dir:'test/unit/coverage',
        fixWebpackSourcePaths: true,
        skipFilesWithNoCoverage: true,
        'report-config': {
            html: {
                subdir: 'html'
            }
        }
    },
    webpack: {
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.js$/,
                enforce: "post",
                include: path.resolve('src/'),
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                }
            }]
        }
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  })
}
