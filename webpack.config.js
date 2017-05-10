const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/build')
    }
};
