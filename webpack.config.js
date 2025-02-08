require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { getProjects, getWorks, getAnalyticsService } = require('./src/ssr');


module.exports = {
    mode: 'production',
    entry: './src/runtime.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9000,
        allowedHosts: 'auto',
        watchFiles: ['src/**/*',],
    },
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: "[id].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            templateParameters: {
                analytics: getAnalyticsService(),
                homepage: process.env.HOMEPAGE || 'https://sharminshayla.github.io/',
                projects: getProjects(),
                works: getWorks(),
                year: new Date().getFullYear()
            },
            template: 'templates/index.ejs'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['*.ejs'],
                    },
                }
            ]
        })
    ]
};