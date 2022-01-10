const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:"http://localhost:9002/"
    },
    mode:'development',
    devServer:{
        static:{
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware:{
            index: 'app2.html',
            writeToDisk:true
        },
        port: 9002,
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
          template: path.join(__dirname, "public", "app2.html"),
        }),
        new ModuleFederationPlugin({
            name:"App2",
            filename:"remoteEntry.js",
            exposes:{
                './App2': './src/App2.js',
                './Headers': './src/Headers/Headers.js',
                './Todos': './src/Todos/Todos.js',

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