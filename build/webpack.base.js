const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webConfig = require("../config/webConfig")

module.exports = {
    entry: `./src/${webConfig.name}/main.js`,
    output: {
        path: path.resolve(__dirname, `../dist/${webConfig.name}`),
        filename: 'js/[name].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(css|less)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    { loader: "postcss-loader" },
                    { loader: "less-loader" }

                ],
            },
            {
                test: /\.vue$/, use: [ "vue-loader" ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash:8][ext][query]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash:8][ext][query]'
                }
            },

        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            title: "我的测试"
        }),
        new MiniCssExtractPlugin({
            // filename: "[name].[hash:8].css",
            chunkFilename: "css/[name].[hash:8].css"
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, `../src`)
        },
        extensions: [ '.js', '.vue' ],//这三种文件格式可以不写后缀名
        modules: [ "node_modules" ]
    },
}