/**
 * Created by lixin on 5/30/17.
 */
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
/*
let commonPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: 'common.js',}
)
*/
module.exports = {

    entry: {
        frontpage: path.resolve(ROOT_PATH, 'src/main/webapp/frontpage/main/webapp/js/frontpage.js'),
        firefly: path.resolve(ROOT_PATH, 'src/main/webapp/firefly/main/webapp/js/firefly.js'),
        dataquery: path.resolve(ROOT_PATH, 'src/main/webapp/dataquery/main/webapp/js/dataquery.js'),
        jupyter: path.resolve(ROOT_PATH, 'src/main/webapp/jupyter/main/webapp/js/jupyter.js'),
    },
    output: {
        path: path.resolve(ROOT_PATH, 'src/main/webapp/buildDir'),
        filename: '[name].bundle.js',
        publicPath: path.resolve(ROOT_PATH, '/publicDir/')
    },
/*    plugins: [ commonPlugin ],*/
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            approot: 'src/main/webapp'
        }
    },
    module: {
        loaders: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'jsx-loader?harmony'
                    }
                ]
            },
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                /*
                 loader: 'babel-loader',
                 query: {
                 stage: 0,
                 cacheDirectory: true,
                 plugins: [
                 'transform-decorators-legacy',
                 'transform-class-properties'
                 ]
                 },

                 options: {
                 presets: ["es2017", "react"]
                 }
                 */
                use: [

                    {
                        loader: 'babel-loader',
                        /*
                         query: {
                         plugins: [
                         "transform-decorators-legacy",
                         "transform-class-properties"
                         ]
                         },
                         */
                        options: {
                            presets: ["es2015", 'stage-0', 'react'],
                            plugins: [
                                "transform-es2015-classes",
                                "transform-decorators-legacy",
                                "transform-class-properties"
                            ]

                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                /*
                 loader: 'file-loader?name=[name].[ext]',
                 //                include: '/playground/MyWeb/IDEA/gradle001/src/main/webapp/js/ui/material',
                 */
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]'
                    }
                ]

            }
            ,
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]___[hash:base64:5]'
                    }
                ]
            }
            ,
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]

    }
};

