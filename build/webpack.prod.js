const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js")

module.exports = merge({
    mode: "production",
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            //仅对 devtool 配置项的 source-map、inline-source-map、hidden-source-map 与 nosources-source-map 值生效。
            new CssMinimizerPlugin(),
        ],
    },
    performance: {
        // assetFilter: function (assetFilename) {
        //     return assetFilename.endsWith('.js');
        // }
        // maxAssetSize: 1000000,
        // maxEntrypointSize: 400000,
        hints: false,//超出大小显示不报警告

    },
}, base)

