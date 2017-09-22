const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';

const webpackConfig = {
    watch: nodeEnv == 'development',
    watchOptions: {
        poll: 300
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: []
};

if(nodeEnv === 'development'){
    webpackConfig.plugins.push(
        new LiveReloadPlugin({ port: 35729, appendScriptTag: true})
    );
}

module.exports = webpackConfig;