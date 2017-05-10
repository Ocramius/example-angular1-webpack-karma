const path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',

        coverageIstanbulReporter: {
            reports: [
                'html',
                'lcovonly',
                'text-summary',
            ],
            fixWebpackSourcePaths: true,
            dir: path.join(__dirname, 'coverage'),
            'report-config': {
                html: {
                    subdir: 'html'
                }
            },
            thresholds: {
                global: {
                    statements: 50,
                    lines: 50,
                    branches: 50,
                    functions: 50
                },
                each: {
                    statements: 80,
                    lines: 80,
                    branches: 50,
                    functions: 80
                }
            }
        },

        frameworks: ['jasmine'],

        files: [
            'tests-entry-point.js',
        ],

        exclude: [],

        preprocessors: {
            'app/**/*.js': ['coverage'],
            'tests-entry-point.js': ['webpack', 'sourcemap'],
        },

        reporters: ['progress', 'coverage', 'coverage-istanbul'],

        webpack: require("./webpack.config"),

        webpackMiddleware: {
            stats: 'errors-only'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: true,

        concurrency: Infinity
    })
};
