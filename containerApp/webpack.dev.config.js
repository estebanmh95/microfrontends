const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:"http://localhost:9000/"
    },
    mode:'development',
    devServer:{
        static:{
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware:{
            index: 'app.html',
            writeToDisk:true
        },
        port: 9000,
        historyApiFallback: true,
        // historyApiFallback:{
        //     index: 'app.html'
        // }
    },
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
        new ModuleFederationPlugin({
            name:"App",
            filename: 'remoteEntry.js',
            remotes:{
                App1:'App1@http://localhost:9001/remoteEntry.js',
                App2:'App2@http://localhost:9002/remoteEntry.js',
                Auth:'Auth@http://localhost:9003/remoteEntry.js'
            },
            shared: {
                react: { 
                    singleton: true, 
                    eager: true, 
                    requiredVersion: deps["react"] 
                },
                "react-dom": { 
                    singleton: true, 
                    eager: true, 
                    requiredVersion: deps["react-dom"] 
                },
                "react-router-dom": { 
                    singleton: true, 
                    eager: true, 
                    requiredVersion: deps["react-router-dom"] 
                }
            },
        })
    ],
}