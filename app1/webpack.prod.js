const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:"./app1/latest/"
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ '@babel/preset-env' , '@babel/preset-react'],
                        plugins: [ '@babel/plugin-transform-runtime' ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "public", "app1.html"),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new ModuleFederationPlugin({
            name:"App1",
            filename:"remoteEntry.js",
            exposes:{
                './App1': './src/App1.js',
                './Header': './src/Header/Header.js',
                './Todo': './src/Todo/Todo.js',
            },
            shared: {
                ...deps,
                react: { 
                    singleton: true, 
                    eager: true, 
                    requiredVersion: deps["react"] 
                },
                'react-dom': {
                  singleton: true,
                  eager: true,
                  requiredVersion: deps['react-dom'],
                },
            },
        })
    ],
}