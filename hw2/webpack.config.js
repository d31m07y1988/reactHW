const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: ['babel-polyfill', './main.js']
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: `[name].js`,
    },

    // devtool: 'source-map',

    plugins: [
        // Вынос CSS/LESS в отдельный файл
        new ExtractTextPlugin(`[name].css`),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [ 'env', { 'modules': false } ],
                        'stage-0', 'react'
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader?noIeCompat']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
}
