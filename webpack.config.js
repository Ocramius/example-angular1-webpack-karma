const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/build') // skipping hash for now, but it's THIS SIMPLE: + '/[hash]'
    },
    node: {
        fs: 'empty',
        tls: 'empty',
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('app'),
                loader: 'istanbul-instrumenter-loader!babel-loader',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            },
            {
                test: /\.html/,
                // loader: 'ngtemplate-loader!html-loader',
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        // @todo splitting out templates could happen here
    ]
};
