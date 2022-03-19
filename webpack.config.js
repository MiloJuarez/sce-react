const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtrarPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[hash][ext][query]",
        publicPath: "/",
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.png|jpg|svg|gif$/,
                type: "asset",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtrarPlugin({
            filename: "styles/[name].[contenthash].css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "styles"),
                    to: "styles",
                },
            ],
        }),
        new Dotenv(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3005,
        compress: true,
        historyApiFallback: true,
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerWebpackPlugin()],
    },
};