const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")

module.exports = merge({
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        open: true,
        hot: true,
        port: 9000,
    },
    
}, base)

