var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/app.ts'],
    output: {
        filename: '[name].js'
    },
    libraryTarget: "commonjs-module",
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loaders: ['html']
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]   
}