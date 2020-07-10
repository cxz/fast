const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDir = path.resolve(__dirname, "./app");
const outDir = path.resolve(__dirname, "./www");

module.exports = {
    devServer: {
        compress: false,
        historyApiFallback: true,
        open: true,
        overlay: true,
        port: 3000,
    },
    devtool: process.env.NODE_ENV === "production" ? "none" : "inline-source-map",
    entry: {
        app: path.resolve(appDir, "index.js"),
    },
    output: {
        path: outDir,
        publicPath: "/",
        filename: "[name].js",
    },
    mode: process.env.NODE_ENV || "development",
    plugins: [
        new HtmlWebpackPlugin({
            contentBase: outDir,
        }),
    ],
    resolve: {
        extensions: [".js"],
    },
};