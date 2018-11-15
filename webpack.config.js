const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './js/index.js',
            './css/font-awesome.css',
            './css/style.css',
            './css/mobile.css',
        ]
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                    fallback: 'style-loader',
                    publicPath: "../"
                })
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            favicon: "img/black_logo_icon.png",
            meta: {
                "viewport": "width=device-width, initial-scale=1"
            },
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './img',
                to: './img'
            }
        ]),
    ]
};