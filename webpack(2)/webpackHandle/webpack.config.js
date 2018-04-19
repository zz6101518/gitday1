var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "./dist"),
        //path: __dirname + "/dist",
        filename: "[id]-[name]-[hash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        "env"
                    ]
                }
            }],
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}