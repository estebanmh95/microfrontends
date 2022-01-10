const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const deps = require('./package.json').dependencies;


const domain = process.env.PRODUCTION_DOMAIN;
const domain1 = "http://localhost:9001";
const domain2 = "http://localhost:9002";

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:"./"
    },
    mode:'production',
    experiments: { 
        topLevelAwait: true 
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
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
          template: path.join(__dirname, "public", "app.html"),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new ModuleFederationPlugin({
            name:"App",
            remotes:{
                App1:`App1@${domain1}/remoteEntry.js`,
                App2:`App2@${domain2}/remoteEntry.js`,
            },
            shared: deps
        })
    ],
}