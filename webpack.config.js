require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { getAnalyticsService } = require('./src/ssr');

const getTemplateParameters = (module) => {
    return {
        analytics: getAnalyticsService(),
        homepage: process.env.HOMEPAGE || 'https://sharminshayla.github.io/',
        year: new Date().getFullYear(),
        view: require(`./src/pages/${module}.view.js`)()
    }
};


module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js',
        home: './src/pages/home.js',
        works: './src/pages/works.js'
    },
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
        // index.html
        new HtmlWebpackPlugin({
            templateParameters: getTemplateParameters('home'),
            template: 'templates/index.ejs',
            chunks: ['app', 'home']
        }),
        // works.html
        new HtmlWebpackPlugin({
            templateParameters: getTemplateParameters('works'),
            template: 'templates/index.ejs',
            chunks: ['app', 'works'],
            filename: 'works.html',
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