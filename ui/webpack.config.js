const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        poll: 300
    },
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    }
};